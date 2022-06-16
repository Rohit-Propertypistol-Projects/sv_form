

export function decodeSiteVisitParams(siteParams){
  let senddata = {}
  senddata['name'] = siteParams.name
  senddata['mobile'] = siteParams.mobile
  senddata['email'] = siteParams.email
  senddata['other_phones'] = siteParams.other_phones
  senddata['address'] = siteParams.address
  senddata['image'] = siteParams.image
  senddata['broker_id'] = siteParams.broker_id
  if ( siteParams.source_id) {
    // senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
    senddata['source_id'] = siteParams.source_id
  }
  senddata['signature'] = siteParams.signature
  senddata['sub_source'] = siteParams.sub_source
  senddata['project_id'] = siteParams.project_id
  senddata['configuration'] = siteParams.configuration
  senddata['client_budget'] = siteParams.client_budget
  senddata['closing_executive'] = siteParams.closing_executive
  senddata['comment'] = siteParams.comment
  return senddata;
}


export let token = '';
export let companyId = '';
if (process.env.NODE_ENV === 'production') {
  if (window.location.host === 'crm-sv.dummy-builder.in') {
    token = 'b807d5eb37392ffe'
    companyId = '3aca59b7-0f5e-4011-8751-b9d40dcc5afa'
  } else {
    token = '86e6a0c5a13121e9'
    companyId = '8ae9913c-ecec-4a4e-89ac-1cfb467c6b1d'
  }
} else {
  token = 'b807d5eb37392ffe'
  companyId = '3aca59b7-0f5e-4011-8751-b9d40dcc5afa'
}
