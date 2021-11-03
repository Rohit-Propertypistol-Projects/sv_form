

export function decodeSiteVisitParams(siteParams){
  let senddata = {}
  senddata['name'] = siteParams.name
  senddata['mobile'] = siteParams.mobile
  senddata['other_phones'] = siteParams.other_phones
  senddata['address'] = siteParams.address
  senddata['profession'] = siteParams.profession
  senddata['company_name'] = siteParams.company_name
  if ( siteParams.source_id) {
    // senddata['source_ids'] = siteParams.source_ids.map(i => i.id.toString())
    senddata['source_id'] = siteParams.source_id
  }
  senddata['project_id'] = siteParams.project_id
  senddata['configuration'] = siteParams.configuration
  senddata['client_budget'] = siteParams.client_budget
  senddata['user_id'] = siteParams.user_id
  senddata['closing_executive'] = siteParams.closing_executive
  senddata['cls_manager'] = siteParams.cls_manager
  senddata['comment'] = siteParams.comment
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? '275cd6622ac92e29' : '275cd6622ac92e29'
export const companyId = process.env.NODE_ENV === 'production' ? '1ee77b89-5d15-41e5-9408-610dfad3c295' : '1ee77b89-5d15-41e5-9408-610dfad3c295'