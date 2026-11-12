
import React, { useState } from "react"
import "./registration.css"
function Registration() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        address: "",
        city: ""
    })

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState("")

    function handleChange(e) {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        setErrors({
            ...errors,
            [name]: ""
        })

        setSuccess("")
    }

    function handleSubmit(e) {
        e.preventDefault()

        let newErrors = {}

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address"
        }

        if (!/^[0-9]{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Enter a valid 10 digit mobile number"
        }

        if (formData.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters"
        }

        if (!formData.confirmPassword ||
            formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        if (!formData.dob) {
            newErrors.dob = "Date of birth is required"
        } else if (new Date(formData.dob) > new Date()) {
            newErrors.dob = "Date of birth cannot be in the future"
        }

        if (!formData.gender) {
            newErrors.gender = "Please select your gender"
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required"
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setSuccess("Registration Successful!")
        }
    }

    function handleReset() {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            dob: "",
            gender: "",
            address: "",
            city: ""
        })

        setErrors({})
        setSuccess("")
    }

    return (
        <div className="container">

            <form className="registration-form" onSubmit={handleSubmit}>

                <h2>Registration Form</h2>
                <p className="subtitle">Please fill in your details</p>

                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.firstName}</p>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.lastName}</p>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.email}</p>
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter 10 digit mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.mobile}</p>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Minimum 8 characters"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.password}</p>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.confirmPassword}</p>
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.dob}</p>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <p className="error">{errors.gender}</p>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <textarea
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.address}</p>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    <p className="error">{errors.city}</p>
                </div>

                <div className="buttons">
                    <button type="submit">Register</button>

                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                </div>

                {success && (
                    <h3 className="success">{success}</h3>
                )}

            </form>

        </div>
    )
}

export default Registration
