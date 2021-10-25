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
      siteVisitParams: {}
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
      let apiParams = decodeSiteVisitParams(this.siteVisitParams)
      this.isLoading = true
      this.$axios.post(`mobile_crm/companies/${companyId}/leads`, {lead: apiParams})
        .then(res => {
          swal({
            title: "Thank You for filling the Site Visit Form!",
            icon: "success",
          }).then(
            this.isLoading = false,
            this.fetchSite(),
            this.siteVisitParams = {},
            this.$refs.svForm.showPage = false,
          );
        })
        .catch(err => {
          this.isLoading = false
          if (err.response.status === 500) {
            swal({
              title: "Server Error!",
              icon: "error",
            });
          } else {
            this.isLoading = false
            swal({
              title: "Error",
              text: err.response.data.message,
              icon: "error",
            });
          }
        })
      },
    }
  }
</script>
<style>

</style>
