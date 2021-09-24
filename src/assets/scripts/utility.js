
export function decodeSiteVisitParams(siteParams){
  let senddata = {}
  senddata['name'] = siteParams.name
  senddata['email'] = siteParams.email
  senddata['mobile'] = siteParams.mobile
  senddata['other_phones'] = siteParams.other_phones
  senddata['occupation'] = siteParams.occupation
  senddata['client_company_name'] = siteParams.client_company_name
  senddata['designation'] = siteParams.designation
  senddata['marital_status'] = siteParams.marital_status
  senddata['address'] = siteParams.address
  senddata['signature'] = siteParams.signature
  senddata['budget'] = siteParams.budget
  senddata['is_loan_require'] = siteParams.is_loan_require
  senddata['purpose_of_buying'] = siteParams.purpose_of_buying
  senddata['customer_reference_name'] = siteParams.customer_reference_name
  senddata['customer_reference_number'] = siteParams.customer_reference_number
  senddata['project_ids'] = [siteParams.project_ids]
  if ( siteParams.source_ids) {
    senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
  }
  senddata['resident_config'] = siteParams.resident_config
  senddata['broker_id'] = siteParams.broker_id
  senddata['building_status'] = siteParams.building_status
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? 'd67eebab-57f2-44e4-b288-14583c11d0e0' : 'f9de35b4710c5e28'
export const companyId = process.env.NODE_ENV === 'production' ? 'd67eebab-57f2-44e4-b288-14583c11d0e0' : 'f7134b01-f362-4efd-8843-62a9ac217bec'