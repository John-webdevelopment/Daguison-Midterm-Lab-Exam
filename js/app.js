function isValidName(value) {
    return value.trim().length >= 2;
}

function isValidStudentNumber(value) {
    return /^\d{2}-\d{4}-\d{3}$/.test(value.trim());
}

function isValidEmailAddress(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidMobileNumber(value) {
    return /^(09\d{9}|\+639\d{9})$/.test(value.trim());
}

function isValidUsername(value) {
    return /^[A-Za-z0-9_]{5,20}$/.test(value.trim());
}

function isValidPassword(value) {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!])\S{8,}$/.test(value);
}

function setError(element, errorElement, message) {
    errorElement.textContent = message;

    if (element) {
        element.setAttribute(
            "aria-invalid",
            message ? "true" : "false"
        );
    }
}

function clearError(element, errorElement) {
    errorElement.textContent = "";

    if (element) {
        element.setAttribute("aria-invalid", "false");
    }
}


const registrationForm =
    document.getElementById("registrationForm");

const fullName =
    document.getElementById("fullName");

const studentNumber =
    document.getElementById("studentNumber");

const emailAddress =
    document.getElementById("emailAddress");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const mobileNumber =
    document.getElementById("mobileNumber");

const course =
    document.getElementById("course");

const yearLevel =
    document.getElementById("yearLevel");

const terms =
    document.getElementById("terms");


const fullNameError =
    document.getElementById("fullNameError");

const studentNumberError =
    document.getElementById("studentNumberError");

const emailError =
    document.getElementById("emailError");

const usernameError =
    document.getElementById("usernameError");

const passwordError =
    document.getElementById("passwordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");

const mobileNumberError =
    document.getElementById("mobileNumberError");

const genderError =
    document.getElementById("genderError");

const courseError =
    document.getElementById("courseError");

const yearLevelError =
    document.getElementById("yearLevelError");

const termsError =
    document.getElementById("termsError");

const passwordStrength =
    document.getElementById("passwordStrength");

const successMessage =
    document.getElementById("successMessage");


const lengthRule =
    document.getElementById("lengthRule");

const uppercaseRule =
    document.getElementById("uppercaseRule");

const numberRule =
    document.getElementById("numberRule");

const specialRule =
    document.getElementById("specialRule");

const spaceRule =
    document.getElementById("spaceRule");


function validateFullName() {

    if (!isValidName(fullName.value)) {

        setError(
            fullName,
            fullNameError,
            "Enter your full name with at least 2 characters."
        );

        return false;
    }

    clearError(fullName, fullNameError);

    return true;
}


function validateStudentNumber() {

    if (!isValidStudentNumber(studentNumber.value)) {

        setError(
            studentNumber,
            studentNumberError,
            "Use this format: 24-0952-781."
        );

        return false;
    }

    clearError(
        studentNumber,
        studentNumberError
    );

    return true;
}


function validateEmailAddress() {

    if (!isValidEmailAddress(emailAddress.value)) {

        setError(
            emailAddress,
            emailError,
            "Enter a valid email address."
        );

        return false;
    }

    clearError(
        emailAddress,
        emailError
    );

    return true;
}


function validateUsername() {

    if (!isValidUsername(username.value)) {

        setError(
            username,
            usernameError,
            "Username must contain 5-20 letters, numbers, or underscores."
        );

        return false;
    }

    clearError(
        username,
        usernameError
    );

    return true;
}


function updatePasswordRules() {

    const value = password.value;

    const hasLength =
        value.length >= 8;

    const hasUppercase =
        /[A-Z]/.test(value);

    const hasNumber =
        /\d/.test(value);

    const hasSpecial =
        /[@$!]/.test(value);

    const hasNoSpaces =
        !/\s/.test(value);


    lengthRule.classList.toggle(
        "valid",
        hasLength
    );

    uppercaseRule.classList.toggle(
        "valid",
        hasUppercase
    );

    numberRule.classList.toggle(
        "valid",
        hasNumber
    );

    specialRule.classList.toggle(
        "valid",
        hasSpecial
    );

    spaceRule.classList.toggle(
        "valid",
        hasNoSpaces
    );


    if (value.length === 0) {

        passwordStrength.textContent = "";

    } else if (
        hasLength &&
        hasUppercase &&
        hasNumber &&
        hasSpecial &&
        hasNoSpaces
    ) {

        passwordStrength.textContent =
            "✓ Strong password";

        passwordStrength.style.color =
            "#16a34a";

    } else {

        passwordStrength.textContent =
            "Password does not meet all requirements";

        passwordStrength.style.color =
            "#dc2626";
    }
}


function validatePassword() {

    updatePasswordRules();

    if (!password.value) {

        setError(
            password,
            passwordError,
            "Password is required."
        );

        return false;
    }

    if (/\s/.test(password.value)) {

        setError(
            password,
            passwordError,
            "Password must not contain spaces."
        );

        return false;
    }

    if (password.value.length < 8) {

        setError(
            password,
            passwordError,
            "Password must contain at least 8 characters."
        );

        return false;
    }

    if (!/[A-Z]/.test(password.value)) {

        setError(
            password,
            passwordError,
            "Password must contain at least one uppercase letter."
        );

        return false;
    }

    if (!/\d/.test(password.value)) {

        setError(
            password,
            passwordError,
            "Password must contain at least one number."
        );

        return false;
    }

    if (!/[@$!]/.test(password.value)) {

        setError(
            password,
            passwordError,
            "Password must contain @, $, or !."
        );

        return false;
    }

    clearError(
        password,
        passwordError
    );

    return true;
}


function validateConfirmPassword() {

    if (!confirmPassword.value) {

        setError(
            confirmPassword,
            confirmPasswordError,
            "Please confirm your password."
        );

        return false;
    }

    if (
        confirmPassword.value !==
        password.value
    ) {

        setError(
            confirmPassword,
            confirmPasswordError,
            "Passwords do not match."
        );

        return false;
    }

    clearError(
        confirmPassword,
        confirmPasswordError
    );

    return true;
}


function validateMobileNumber() {

    if (!isValidMobileNumber(mobileNumber.value)) {

        setError(
            mobileNumber,
            mobileNumberError,
            "Use 09123456789 or +639123456789."
        );

        return false;
    }

    clearError(
        mobileNumber,
        mobileNumberError
    );

    return true;
}


function validateGender() {

    const selectedGender =
        document.querySelector(
            'input[name="Gender"]:checked'
        );

    if (!selectedGender) {

        genderError.textContent =
            "Please select your gender.";

        return false;
    }

    genderError.textContent = "";

    return true;
}


function validateCourse() {

    if (course.value === "") {

        setError(
            course,
            courseError,
            "Please select your course."
        );

        return false;
    }

    clearError(
        course,
        courseError
    );

    return true;
}


function validateYearLevel() {

    if (yearLevel.value === "") {

        setError(
            yearLevel,
            yearLevelError,
            "Please select your year level."
        );

        return false;
    }

    clearError(
        yearLevel,
        yearLevelError
    );

    return true;
}


function validateTerms() {

    if (!terms.checked) {

        termsError.textContent =
            "You must check if you follow that";

        terms.setAttribute(
            "aria-invalid",
            "true"
        );

        return false;
    }

    termsError.textContent = "";

    terms.setAttribute(
        "aria-invalid",
        "false"
    );

    return true;
}


function showSuccessSummary() {

    const selectedGender =
        document.querySelector(
            'input[name="Gender"]:checked'
        );

    const genderValue =
        selectedGender
            ? selectedGender.value
            : "Not specified";


    successMessage.innerHTML = `

        <h3>✓ Registration Successful!</h3>

        <p>
            Your registration has been successfully completed.
        </p>

        <div class="registration-summary">

            <p>
                <strong>Full Name:</strong>
                ${fullName.value.trim()}
            </p>

            <p>
                <strong>Student Number:</strong>
                ${studentNumber.value.trim()}
            </p>

            <p>
                <strong>Email:</strong>
                ${emailAddress.value.trim()}
            </p>

            <p>
                <strong>Username:</strong>
                ${username.value.trim()}
            </p>

            <p>
                <strong>Mobile Number:</strong>
                ${mobileNumber.value.trim()}
            </p>

            <p>
                <strong>Gender:</strong>
                ${genderValue}
            </p>

            <p>
                <strong>Course:</strong>
                ${course.options[course.selectedIndex].text}
            </p>

            <p>
                <strong>Year Level:</strong>
                ${yearLevel.options[yearLevel.selectedIndex].text}
            </p>

        </div>
    `;

    successMessage.hidden = false;

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function clearSuccessMessage() {

    successMessage.innerHTML = "";

    successMessage.hidden = true;
}


registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        clearSuccessMessage();


        const isFormValid =
            validateFullName() &&
            validateStudentNumber() &&
            validateEmailAddress() &&
            validateUsername() &&
            validatePassword() &&
            validateConfirmPassword() &&
            validateMobileNumber() &&
            validateGender() &&
            validateCourse() &&
            validateYearLevel() &&
            validateTerms();


        if (isFormValid) {

            showSuccessSummary();

        } else {

            const firstInvalid =
                registrationForm.querySelector(
                    '[aria-invalid="true"]'
                );

            if (firstInvalid) {

                firstInvalid.focus();

            } else if (
                genderError.textContent
            ) {

                document.querySelector(
                    'input[name="Gender"]'
                ).focus();
            }
        }
    }
);


fullName.addEventListener(
    "input",
    validateFullName
);

studentNumber.addEventListener(
    "input",
    validateStudentNumber
);

emailAddress.addEventListener(
    "input",
    validateEmailAddress
);

username.addEventListener(
    "input",
    validateUsername
);


password.addEventListener(
    "input",
    function () {

        updatePasswordRules();

        if (password.value) {
            validatePassword();
        }

        if (confirmPassword.value) {
            validateConfirmPassword();
        }
    }
);


confirmPassword.addEventListener(
    "input",
    validateConfirmPassword
);

mobileNumber.addEventListener(
    "input",
    validateMobileNumber
);

course.addEventListener(
    "change",
    validateCourse
);

yearLevel.addEventListener(
    "change",
    validateYearLevel
);

terms.addEventListener(
    "change",
    validateTerms
);


document
    .querySelectorAll('input[name="Gender"]')
    .forEach(function (radio) {

        radio.addEventListener(
            "change",
            validateGender
        );

    });


registrationForm.addEventListener(
    "reset",
    function () {

        setTimeout(function () {

            clearSuccessMessage();


            document
                .querySelectorAll(".error")
                .forEach(function (error) {

                    error.textContent = "";

                });


            document
                .querySelectorAll("[aria-invalid]")
                .forEach(function (element) {

                    element.setAttribute(
                        "aria-invalid",
                        "false"
                    );

                });


            passwordStrength.textContent = "";

            passwordStrength.style.color = "";


            document
                .querySelectorAll(
                    ".password-requirements li"
                )
                .forEach(function (rule) {

                    rule.classList.remove(
                        "valid"
                    );

                });

        }, 0);
    }
);