# build-luncher-BE

Proposed tables and end points

===== TABLES =====

1) Users: ID(unique, auto-incremented, synthetic), FIRST_NAME(string), LAST_NAME(string), EMAIL(string with email validation?), PASSWORD(non-plain-text storage must be over 5 chars), ROLE(admin OR donor)

2) Schools: ID(unique, auto-incremented, synthetic), SCHOOL_NAME(string), STATE(string as capitalized postal abreviation), ZIP(numeric), FUNDS_NEEDED(numeric in USD), FUNDS_RECEIVED(numeric in USD), ADMIN_ID(foreign key linked to ID in Users table)

3) Donations: ID(unique, auto-incremented, synthetic), AMOUNT(numeric in USD), DATE(standardised format with moment.js), DONOR_ID(foreign key linked to ID in Users table), SCHOOL_ID(foreign key linked to ID in Schools table)

// All names (FIRST_NAME, LAST_NAME, SCHOOL_NAME) will be stored with capitalization on first chars after spaces,  with all other chars lower case.

=== ERROR MESSAGES ===
All error messages will be formatted as such in the response: {
    message: 'reason for error',
}

=== ENDPOINTS WITH NO AUTHENTICATION ===
[GET] /api/test
SUCCESFUL RES: {
    api: 'up'
}

[GET] /api/schools
SUCCESFUL RES:[
    {
        name: 'Abraxas Continuation High',
        state: 'CA',
        zip: 92064,
        fundsNeeded: 365,
        contact: 'schoooladmin@gmail.com'
    },
      {
        name: '3D Academy',
        state: 'TX',
        zip: 78537,
        fundsNeeded: 820,
        contact: 'schoooladmintwo@gmail.com'
    },
]

=== ENDPOINTS FOR ADMINS ===
A token linked to an admin-type user must be attached in the Authorization header of the request

[PUT] /api/admin
Changes can be made to the admins first name, last name, email, and password
SUCCESFUL RES: {
        firstName: 'Gabriel',
        lastName: 'Cabrejas',
        email: 'gabcab@gmail.com'
}

[GET] /api/admin/school
SUCCESFUL RES IF THE ADMIN IS LINKED TO NO SCHOOL: {
    message: 'no school associated with this admin'
}

SUCCESFUL RES IF THE ADMIN IS LINKED TO A SCHOOL: {
        name: 'Abraxas Continuation High',
        state: 'CA',
        zip: 92064,
        fundsNeeded: 365,
        fundsReceived: 220,
        contact: 'schoooladmin@gmail.com',
        donations: [
            {
                date: 'April 13, 2019 11:46 AM',
                amount: 25,
                donorContact: 'generousdonor@gmail.com' 
            },     {
                date: 'April 10, 2018 11:46 AM',
                amount: 55,
                donorContact: 'anothergenerousdonor@gmail.com' 
            }, 
        ]
}

[PUT] /api/admin/school
Changes can be made for name and fundsNeeded.
SUCCESFUL RES(is an object with the updated name and/or fundsNeeded for the school): {
        name: 'Abraxas Continuation High',
        fundsNeeded: 420,
}

[DELETE] /api/admin/school
SUCCESFUL RES(is the name of the deleted school): {
        schoolDeleted: 'Abraxas Continuation High',
}

=== ENDPOINTS FOR DONORS ===
A token linked to an donor-type user must be attached in the Authorization header of the request
[POST] /api/donatations/:id
Valid id of a school passed in params and the following passed in request body:
{   
    donation: 10,
}

SUCCESFUL RES: {
    fundsDonated: 10,
}

=== ENDPOIINTS FOR CREDENTIALS ===
[POST] /api/register
The following body should be passed: 
{
    firstName: 'gabriel',
    lastName: 'cabrejas',
    email: 'gabcab@gmail.com',
    password: 'secretpassword' (must be over 5 chars),
    role: 'admin' OR 'donor',
}
SUCCESFUL RES: {
    jwtToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
}

[POST]
The following body should be passed: 
{
    email: 'gabcab@gmail.com',
    password: 'secretpassword'
}
SUCCESFUL RES: {
    firstName: 'gabriel',
    lastName: 'cabrejas',
    email: 'gabcab@gmail.com',
    role: 'admin' OR 'donor',
}
