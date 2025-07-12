import React, { useState, useEffect, useRef } from "react";
import { apiService } from "../services/apiService";

const ServiceSelector = ({ title, selectedServices = [], setSelectedServices }) => {
  const [serviceOptions, setServiceOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  // ✅ Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await apiService.get("/services/");
        setServiceOptions(response.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // ✅ Display selected services or placeholder
  const displayText =
    selectedServices.length > 0
      ? `${selectedServices.length} selected`
      : "Select Services";

  // ✅ Handle checkbox change
  const handleCheckboxChange = (service) => {
    const alreadySelected = selectedServices.some(s => s.id === service.id);
    const updated = alreadySelected
      ? selectedServices.filter(s => s.id !== service.id)
      : [...selectedServices, service];

    setSelectedServices(updated);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Filter services based on search
  const filteredServices = serviceOptions.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Select all filtered services
  const handleSelectAll = () => {
    const allSelected = filteredServices.every(service => 
      selectedServices.some(s => s.id === service.id)
    );
    
    if (allSelected) {
      setSelectedServices(selectedServices.filter(selected => 
        !filteredServices.some(filtered => filtered.id === selected.id)
      ));
    } else {
      const newSelected = [...selectedServices];
      filteredServices.forEach(service => {
        if (!selectedServices.some(s => s.id === service.id)) {
          newSelected.push(service);
        }
      });
      setSelectedServices(newSelected);
    }
  };

  return (
    <div className="multi-select-container mb-3" ref={dropdownRef}>
      <label className="input-label">{title}</label>

      {/* ✅ Select box */}
      <div 
        className="select-box" 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        role="button"
        tabIndex={0}
      >
        {displayText} <span className="arrow">{dropdownOpen ? '▲' : '▼'}</span>
      </div>

      {/* ✅ Dropdown with search and checkboxes */}
      {dropdownOpen && (
        <div className="dropdown-menu show">
          <div className="dropdown-search p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {filteredServices.length > 0 && (
            <div className="select-all p-2">
              <label className="form-label">
                <input
                  type="checkbox"
                  checked={filteredServices.every(service => 
                    selectedServices.some(s => s.id === service.id)
                  )}
                  onChange={handleSelectAll}
                />
                Select All
              </label>
            </div>
          )}

          <div className="options-container">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <label key={service.id} className="form-label d-block p-2">
                  <input
                    type="checkbox"
                    checked={selectedServices.some(s => s.id === service.id)}
                    onChange={() => handleCheckboxChange(service)}
                  />
                  {' '}{service.name}
                </label>
              ))
            ) : (
              <p className="no-options p-2">No services available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
