import { useState } from 'react';
import styles from './FormComponent.module.css';
import FormService from '../../services/FormService';

export default function FormComponent() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [guess, setGuess] = useState("");
    const [pin, setPin] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();


        const formData = {
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            guess: guess,
            pin: pin
        };

        // Send form data to service layer;
        FormService.sendForm(formData);

    }

    function toggleVisible(event) {
        const pinInput = document.getElementById('pin');
        if (event.target.checked) {
            pinInput.type = 'text';
        } else {
            pinInput.type = 'password';
        }
    }




    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Guess Entry Form</h1>

            <section className={styles.formSection}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="fname" className={styles.label}>First Name:</label>
                        <input type="text" id="fname" name="fname" placeholder='Enter first name' className={styles.input} required onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lname" className={styles.label}>Last Name:</label>
                        <input type="text" id="lname" name="lname" placeholder='Enter last name' className={styles.input} required onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className={styles.label}>Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Enter phone number' className={styles.input} required onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className={styles.label}>Email:</label>
                        <input type="email" id="email" name="email" className={styles.input} placeholder='Enter email' required onChange={(e) => setEmailAddress(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="guess" className={styles.label}>Your Guess:</label>
                        <input type="text" id="guess" name="guess" className={styles.input} placeholder='Enter guess' required onChange={(e) => setGuess(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="pin" className={styles.label}>Pin:</label>
                        <input type="password" id="pin" name="pin" className={styles.input} required
                            minLength={19} maxLength={19}
                            placeholder='Enter pin' autoComplete="off"
                            pattern='[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}'
                            inputMode='numeric'
                            title='Pin must be in the format XXXX-XXXX-XXXX-XXXX'
                            onChange={(e) => setPin(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" onClick={toggleVisible} className={styles.checkbox} title='Show/Hide Password' /> Show Password
                    </div>
                </form>

            </section>
        </div>
    )
}