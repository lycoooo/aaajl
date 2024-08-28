// ==UserScript==
// @name         AUTOMATIC REGISTER FOR AAAJL
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       lyco12
// @match        https://www.aaajl.cc/m/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to generate a random string with digits ranging from 6 to 13 characters
    function generateRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Function to copy text to clipboard using the Clipboard API
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() {
                console.log('Username copied to clipboard.');
            }).catch(function(error) {
                console.error('Failed to copy username: ', error);
            });
        } else {
            console.error('Clipboard API not supported on this device.');
        }
    }

    // Function to fill input and trigger event
    function fillAndDispatchEvent(inputField, value) {
        inputField.value = value;
        inputField.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Wait for the page to load fully
    window.addEventListener('load', function() {
        // Target the username, password, and confirm password input fields
        let usernameField = document.querySelector('input[name="username"]');
        let passwordField = document.querySelector('input[name="password"]');
        let confirmPasswordField = document.querySelector('input[name="confimpsw"]');

        // If the fields exist, fill them with randomly generated values
        if (usernameField) {
            const randomUsername = generateRandomString(Math.floor(Math.random() * 8) + 6);
            fillAndDispatchEvent(usernameField, randomUsername);
            copyToClipboard(randomUsername);
        }

        if (passwordField) {
            const randomPassword = "lyco12";
            fillAndDispatchEvent(passwordField, randomPassword);

            if (confirmPasswordField) {
                // Use the same password for confirmation
                fillAndDispatchEvent(confirmPasswordField, randomPassword);
            }
        }
         // Target the submit button
        let submitButton = document.querySelector('button.submit-btn');

        // If the submit button exists, click it
        if (submitButton) {
            submitButton.click();
            console.log('Form submitted.');
        }
    });
})();