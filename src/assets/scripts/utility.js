

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

export const token = process.env.NODE_ENV === 'production' ? 'b807d5eb37392ffe' : 'b807d5eb37392ffe'
export const companyId = process.env.NODE_ENV === 'production' ? '3aca59b7-0f5e-4011-8751-b9d40dcc5afa' : '3aca59b7-0f5e-4011-8751-b9d40dcc5afa'