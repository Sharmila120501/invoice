let link='http://192.168.1.15:8080/'
let vendor='http://192.168.1.15:8090/'
let bankifsc = 'https://ifsc.razorpay.com/'

let api=link+'company/'
let ven=vendor+'vendor/'
let bank=link+'bank/'

export const Point={

    addcomp:api+'addCompany',
    viewcomp:api+'getAllCompany',
    getByid:api+'getDetailsByID/',
    update:api+'updateCompany',

    addvendor:ven+'addingVendor',
    getbyid:ven+'getVendorDetailsByID/',
    vendorview:ven+'getVendorDetailsByVendorId/',
    updates:ven+'updateVendorDetails',


    addbank: bank+'insertNewBank',
    getbank: bank+'getBankDetailsById/',
    getbyIdbank: bank+'getBankDetailsByBankId/',
    updatesbank: bank+'updateBankDetails',
    ifsc: bankifsc
}