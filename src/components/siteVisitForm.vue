<template>
  <div>
    <t-card class="bg" v-if="!showPage">
      <form @submit.prevent="showPage = true">
        <div class="form-header-logo page_margin px-16 pt-20 pb-16">
          <div class="Heading">Welcome to Ekdanta</div>
          <img class="mx-auto mb-8" src="@/assets/logo-sq.png">
            <div class="mx-auto mb-8 w-72">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Project *
                <t-select v-model="siteVisitParams.project_id" required  placeholder="Select Project" :options="siteData.projects" class="mt-2" />
              </label>
            </div>
              <div class="flex mt-8 justify-center">
              <t-button id="btn_clr" type="submit" class="px-8 text-base font-medium">
                Continue
              </t-button>
            </div>
        </div>
      </form>
    </t-card>
    <t-card class="bg" v-if="showPage">
      <div class="form-header page_margin px-16 pt-10 pb-16">
         <img class="mx-auto mb-8" src="@/assets/logo-sq.png">
        <p class="font-bold text-lg mb-2" id="form-header-text">Walkin / Site Visit Information Form</p>
      </div>
        <div class="form-body page_margin bottom_margin px-16">
          <t-card class="rounded-0 bg-none" style="background: transparent; box-shadow: none;">
            <form @submit.prevent="submitFn()">
              <div class="bg-white -mt-14 p-5 rounded-lg shadow-sm">
              <label class="block text-main text-sm font-bold mb-3" for="grid-first-name">
              There is a lot in a name, Could we please know yours?
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="block text-gray-400 text-opacity-50 text-xs mb-3" for="grid-first-name">Full Name *
                  <t-input v-model="siteVisitParams.name" required  class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Mobile *
                  <t-input v-model="siteVisitParams.mobile" required class="mt-2" maxlength="10" type="tel"  name="my-input" />
                </label>
              </div>
              <label class="block text-main text-sm font-bold mb-3" for="grid-first-name">
                We will Look Forward to your birthday every year.
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="block text-gray-400 text-opacity-50 text-xs" for="grid-first-name">Date of Birth
                    <datetime type="date" v-model="siteVisitParams.dob" placeholder="Date of Birth" class="mt-2 text-gray-800">
                    </datetime>
                  </label>
              </div>
              <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
                We would love to be in touch with you.
              </label>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Address *
                  <t-input v-model="siteVisitParams.address1" required class="mt-2" name="my-textarea" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <label class="block text-gray-400 text-xs" for="grid-first-name">City *
                  <t-select v-model="siteVisitParams.city_id"  class="mt-2" required placeholder="Select City" :options="siteData.cities" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Locality
                  <t-select v-model="siteVisitParams.locality_id"  class="mt-2" placeholder="Select Locality" :options="localities" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4  mt-2">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Pincode
                  <t-input v-model="siteVisitParams.pincode"  class="mt-2" type="text"  name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Landline
                  <t-input v-model="siteVisitParams.landline"  class="mt-2" maxlength="10" type="tel"  name="my-input" />
                </label>
              </div>
              <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
               The League of extraordinary ladies and gentlemen.
              </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <label class="block text-gray-400 text-xs " for="grid-first-name">Occupation
                <t-input v-model="siteVisitParams.occupation"  class="mt-2" type="text"  name="my-input" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Organization Name
                <t-input v-model="siteVisitParams.organization"  class="mt-2" type="text"  name="my-input" />
              </label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <label class="block text-gray-400 text-xs " for="grid-first-name">Office Location
                <t-input v-model="siteVisitParams.office_location"  class="mt-2" type="text"  name="my-input" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Designation
                <t-input v-model="siteVisitParams.designation"  class="mt-2" type="text"  name="my-input" />
              </label>
            </div>
              <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
               The Cars you drive.
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <label class="block text-gray-400 text-xs " for="grid-first-name">Cars Make
                <t-input v-model="siteVisitParams.car_make"  class="mt-2" type="text"  name="my-input" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Cars Model
                <t-input v-model="siteVisitParams.car_model"  class="mt-2" type="text"  name="my-input" />
              </label>
            </div>
            <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
               Allow us to aid you in choosing your dream Residence
            </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Budget *
              <t-select v-model="siteVisitParams.budget_range" required class="mt-2" placeholder="Select Budget"
              :options="['Below 70 Lakh', '70-80 Lakh', '80-90 Lakh', '90-1 Cr', '1-1.2 Cr', '1.2-1.4 Cr', '1.4-1.5 Cr', 'Above 1.5 Cr']" /></label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Configuration *
                <t-select v-model="siteVisitParams.configuration" required class="mt-2" placeholder="Select Configuration" :options="['1 BHK', '2 BHK', '3 BHK']" /></label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <label class="block text-gray-400 text-xs " for="grid-first-name">Purpose of purchase *
                <t-select v-model="siteVisitParams.purpose" class="mt-2" required placeholder="Select purchase" :options="['Personal Use', 'Investment']" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Current Residence type *
                <t-select v-model="siteVisitParams.current_residence" required class="mt-2" placeholder="Select Current Residence type" :options="['1 BHK', '2 BHK']" />
              </label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Current Residence Ownership *
                <t-select v-model="siteVisitParams.current_owner" required class="mt-2" placeholder="Select Current Residence Ownership" :options="['Owner', 'Rental']" />
              </label>
            </div>
            <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
               It is a privilege to have you here. How did you hear of us?
            </label>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
              <t-select v-model="siteVisitParams.source_id" required  class="mt-2" placeholder="Select Source" :options="siteData.sources" />
              <!-- <multiselect v-model="siteVisitParams.source_ids" required :searchable="true"  placeholder="Select Sources" label="text" track-by="id" :options="siteData.sources" :multiple="true" :taggable="true"></multiselect> -->
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2" v-if="is_digital_sub_souces">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Sub Source *
                <t-select v-model="siteVisitParams.enquiry_sub_source_id" required  class="mt-2" placeholder="Select Sub Source" :options="siteData.digital_sub_souces" />
              </label>
            </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2" v-if="is_ChannelPartner">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Channel Partner *
                  <t-select v-model="siteVisitParams.broker_id" required  @input="getCPDetails(siteVisitParams.broker_id)" class="mt-2" placeholder="Select Channel Partner" :options="siteData.brokers" />
                </label>
                <label class="block text-gray-400 text-xs " for="grid-first-name">Channel Partner Company Name
                  <t-input v-model="siteVisitParams.firm_name"  id="firm_name" disabled class="mt-2" type="text"  name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2" v-if="is_ChannelPartner">
                <label class="block text-gray-400 text-xs " for="grid-first-name">RERA ID
                  <t-input v-model="siteVisitParams.rera_no" id="rera_no" disabled class="mt-2" type="text"  name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Mobile No
                  <t-input v-model="siteVisitParams.mobile_no"  id="mobile_no" disabled class="mt-2" type="text"  name="my-input" />
                </label>
              </div>
              <label class="block text-main text-sm font-bold mb-3 mt-3" for="grid-first-name">
                Would you want any of your friends to enjoy the Ekdanta Experience?
              </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <label class="block text-gray-400 text-xs " for="grid-first-name">1st Friend Name
                    <t-input v-model="siteVisitParams.friend_name_1"  class="mt-2" type="text"  name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">1st Friend phone No
                    <t-input v-model="siteVisitParams.friend_contact_1"  class="mt-2" maxlength="10" type="tel"  name="my-input" />
                  </label>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <label class="block text-gray-400 text-xs " for="grid-first-name">2nd Friend Name
                    <t-input v-model="siteVisitParams.friend_name_2"  class="mt-2" type="text"  name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">2nd Friend phone No
                    <t-input v-model="siteVisitParams.friend_contact_2"  class="mt-2" maxlength="10" type="tel"  name="my-input" />
                  </label>
                </div>
                <button id="btn_clr" type="submit" class="bg-black text-white py-2 px-8 mt-10 border rounded text-base font-medium">
                  Submit
                </button>
          </div>
         </form>
        </t-card>
      </div>
    </t-card>
  </div>
</template>

<script>
/*eslint-disable */
import { Datetime } from 'vue-datetime';
import {companyId} from '@/assets/scripts/utility.js';
export default {
  components: {
    // Multiselect,
    datetime: Datetime,
  },
  props: {
    siteVisitParams: {
      type: Object,
      required: true
    },
    siteData: {
      type: Object,
      required: true
    },
    submitFn: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      showPage: false,
    }
  },
  methods: {
    getCPDetails(id) {
      this.$parent.isLoading = true
      this.$axios.get(`mobile_crm/companies/${companyId}/broker?broker_id=${id}`).then((response) => {
        this.$parent.isLoading = false
        document.getElementById("firm_name").value = response.data.firm_name
        document.getElementById("rera_no").value = response.data.rera_no
        document.getElementById("mobile_no").value = response.data.mobile_no
        this.siteVisitParams.firm_name = response.data.firm_name
        this.siteVisitParams.rera_no = response.data.rera_no
        this.siteVisitParams.mobile_no = response.data.mobile_no
      }).catch(err => {
        this.$parent.isLoading = false
      })
    }
  },
  computed: {
    is_ChannelPartner() {
      return this.siteData.cp_sources_ids.includes(parseInt(this.siteVisitParams.source_id))
    },
    is_digital_sub_souces() {
      return this.siteData.digital_sources_ids.includes(parseInt(this.siteVisitParams.source_id))
    },
    localities() {
      if (this.siteVisitParams.city_id) {
         return this.siteData.localities.filter(l => l.city_id == this.siteVisitParams.city_id)
      } else {
        return []
      }
    }
  }
}
</script>

