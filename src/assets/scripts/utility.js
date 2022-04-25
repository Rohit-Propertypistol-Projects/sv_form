

export function decodeSiteVisitParams(siteParams){
  let senddata = {}
  senddata['name'] = siteParams.name
  senddata['mobile'] = siteParams.mobile
  senddata['dob'] = siteParams.dob
  senddata['address1'] = siteParams.address1
  senddata['locality_id'] = siteParams.locality_id
  senddata['city_id'] = siteParams.city_id
  senddata['pincode'] = siteParams.pincode
  senddata['landline'] = siteParams.landline
  senddata['occupation'] = siteParams.occupation
  senddata['organization'] = siteParams.organization
  senddata['office_location'] = siteParams.office_location
  senddata['designation'] = siteParams.designation
  senddata['car_make'] = siteParams.car_make
  senddata['car_model'] = siteParams.car_model
  senddata['budget_range'] = siteParams.budget_range
  if ( siteParams.source_id) {
    // senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
    senddata['source_id'] = siteParams.source_id
  }
  senddata['enquiry_sub_source_id'] = siteParams.enquiry_sub_source_id
  senddata['project_id'] = siteParams.project_id
  senddata['configuration'] = siteParams.configuration
  senddata['purpose'] = siteParams.purpose
  senddata['current_residence'] = siteParams.current_residence
  senddata['current_owner'] = siteParams.current_owner
  senddata['broker_id'] = siteParams.broker_id
  senddata['friend_name_1'] = siteParams.friend_name_1
  senddata['friend_name_2'] = siteParams.friend_name_2
  senddata['friend_contact_1'] = siteParams.friend_contact_1
  senddata['friend_contact_2'] = siteParams.friend_contact_2
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? '83a7ed70e78ceba6' : '83a7ed70e78ceba6'
export const companyId = process.env.NODE_ENV === 'production' ? 'e43e17e7-85f2-4427-8c87-013692853b62' : 'e43e17e7-85f2-4427-8c87-013692853b62'