

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
  senddata['budget'] = siteParams.budget
  senddata['user_id'] = siteParams.user_id
  senddata['closing_executive'] = siteParams.closing_executive
  senddata['comment'] = siteParams.comment
  return senddata;
}

export const token = process.env.NODE_ENV === 'production' ? 'da341249439a9e72' : 'f9de35b4710c5e28'
export const companyId = process.env.NODE_ENV === 'production' ? 'fd8bbb16-e399-4e8f-a1fa-8a9eb337123a' : 'f7134b01-f362-4efd-8843-62a9ac217bec'