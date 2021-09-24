
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
  senddata['closing_executive'] = siteParams.closing_executive
  if ( siteParams.source_ids) {
    senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
  }
  senddata['resident_config'] = siteParams.resident_config
  senddata['broker_id'] = siteParams.broker_id
  senddata['building_status'] = siteParams.building_status
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? 'da341249439a9e72' : 'b807d5eb37392ffe'
export const companyId = process.env.NODE_ENV === 'production' ? 'fd8bbb16-e399-4e8f-a1fa-8a9eb337123a' : '3aca59b7-0f5e-4011-8751-b9d40dcc5afa'