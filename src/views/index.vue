<template>
  <div>
    <div class="loader-wrapper"  v-show="this.isLoading">
      <div class="loader">Loading...</div>
    </div>
    <siteVisitForm v-if="Object.keys(this.siteData).length > 0" ref="svForm" :siteData="siteData" :siteVisitParams="siteVisitParams" :submitFn="addSiteVisitData"/>
  </div>
</template>

<script>
/*eslint-disable */
import {companyId} from '@/assets/scripts/utility.js';
import {decodeSiteVisitParams} from '@/assets/scripts/utility.js';
import siteVisitForm from '../components/siteVisitForm'
export default {
  components: {
    siteVisitForm
  },
  data () {
    return {
      isLoading: false,
      siteData: {},
      siteVisitParams: {
        name: null,
        email: null,
        mobile: null,
        other_phones: null,
        occupation: null,
        client_company_name: null,
        designation: null,
        marital_status: null,
        address: null,
        budget: null,
        signature: null,
        is_loan_require: null,
        loan_amount: null,
        bank_name: null,
        purpose_of_buying: null,
        customer_reference_name: null,
        customer_reference_number: null,
        source_ids: [],
        resident_config: null,
        project_ids: null,
        broker_id: null,
        closing_executive: null,
        building_status: null,
        budget: null,
      }
    }
  },
  created() {
    this.fetchSite()
  },
  methods: {
    fetchSite() {
      this.isLoading = true
      this.$axios.get(`mobile_crm/companies/${companyId}/settings`).then((response) => {
        this.isLoading = false
        this.siteData = response.data
      }).catch(err => {
        this.isLoading = false
      })
    },
    addSiteVisitData(){
      let { isEmpty, data } = this.$refs.svForm.$refs.signaturePad.saveSignature()
      if (!isEmpty) {
        this.siteVisitParams.signature = data
      } else {
        this.siteVisitParams.signature = null
      }
      let apiParams = decodeSiteVisitParams(this.siteVisitParams)
      this.isLoading = true
      this.$axios.post(`mobile_crm/companies/${companyId}/leads`, {lead: apiParams})
        .then(res => {
          this.$toast.success("Thank You for filling the Site Visit Form!", {
            timeout: 5000
          });
          this.isLoading = false
          this.fetchSite()
          this.siteVisitParams = {}
          this.$refs.svForm.showPage = false
          this.$refs.svForm.$refs.signaturePad.clearSignature()
        })
        .catch(err => {
          this.isLoading = false
          if (err.response.status === 500) {
            this.$toast.error("Server Error!", {
              timeout: 5000
            });
          } else {
            this.isLoading = false
            this.$toast.info(err.response.data.message, {
              timeout: 5000
            });
          }
        })
      },
    }
  }
</script>
<style>

</style>
