
export function decodeSiteVisitParams(siteParams){
  let senddata = {}
  senddata['name'] = siteParams.name
  senddata['email'] = siteParams.email
  senddata['mobile'] = siteParams.mobile
  senddata['other_phones'] = siteParams.other_phones
  senddata['occupation'] = siteParams.occupation
  senddata['company_name'] = siteParams.client_company_name
  senddata['designation'] = siteParams.designation
  senddata['marital_status'] = siteParams.marital_status
  senddata['address'] = siteParams.address
  senddata['signature'] = siteParams.signature
  senddata['budget'] = siteParams.budget
  senddata['housing_loan_bridge_loan_lap_requirement'] = siteParams.is_loan_require
  senddata['loan_amount'] = siteParams.loan_amount
  senddata['bank_name'] = siteParams.bank_name
  senddata['purpose_of_buying_the_flat'] = siteParams.purpose_of_buying
  senddata['customer_reference_name'] = siteParams.customer_reference_name
  senddata['customer_reference_mobileno'] = siteParams.customer_reference_number
  senddata['project_ids'] = [siteParams.project_ids]
  senddata['closing_executive'] = siteParams.closing_executive
  if ( siteParams.source_ids) {
    senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
  }
  senddata['residential_requirement_type'] = siteParams.resident_config
  senddata['broker_id'] = siteParams.broker_id
  senddata['project_status_type'] = siteParams.building_status
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? 'da341249439a9e72' : 'da341249439a9e72'
export const companyId = process.env.NODE_ENV === 'production' ? 'fd8bbb16-e399-4e8f-a1fa-8a9eb337123a' : 'fd8bbb16-e399-4e8f-a1fa-8a9eb337123a'