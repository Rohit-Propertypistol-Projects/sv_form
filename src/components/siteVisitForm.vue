<template>
  <div>
    <t-card class="bg">
       <img class="object-scale-down h-20 w-full ..." src="@/assets/logo-sm-n.png">
        <p class="mt-0 -mb-16 page_margin font-bold text-lg" id="form-header-text">Walkin / Site Visit Information Form</p>
          <t-card class="mt-20 mb-20 page_margin rounded-lg">
            <form @submit.prevent="submitFn()">
              <label class="block tracking-wide text-red-500 text-md font-bold mb-2" id="header-text-colored" for="grid-first-name">
              Personal details
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Full Name *
                  <t-input v-model="siteVisitParams.name" required  class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Email Address *
                  <t-input v-model="siteVisitParams.email" class="mt-2" type="email" required  name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Current Address
                  <t-input v-model="siteVisitParams.address" class="mt-2" name="my-textarea" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <label class="block text-gray-400 text-xs " for="grid-first-name">Mobile Number *
                  <t-input v-model="siteVisitParams.mobile" type="number" required class="mt-2"  name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Alternate Number
                  <t-input v-model="siteVisitParams.other_phones" type="number"  class="mt-2" name="my-input" />
                </label>
              </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
              <label class="block text-gray-400 text-xs" for="grid-first-name" >Occupation *</label>
              <t-radio-group v-model="siteVisitParams.occupation" required :options="[{ value: 'Self-Employed', text: 'Self-Employed' }, { value: 'Salaried', text: 'Salaried' }]" name="occupation"></t-radio-group>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Company Name
                <t-input v-model="siteVisitParams.client_company_name" type="text" class="mt-2"  name="my-input" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Designation
                <t-input v-model="siteVisitParams.designation" type="text"  class="mt-2" name="my-input" />
              </label>
            </div>
                <label class="block text-gray-400 text-xs mt-5" for="grid-first-name">Maratial Status * </label>
                <t-radio-group v-model="siteVisitParams.marital_status" required class="mt-2" :options="[{ value: 'Married', text: 'Married' }, { value: 'Unmarried', text: 'Unmarried' }]" name="Maratial"></t-radio-group>
                <div id="dashed" class="border-dashed border-2 mt-10 mb-10 border-light-black-500 ..."></div>

                <label class="block text-black-500 text-sm mt-5 mb-5 font-bold" for="grid-first-name">How you come to know about your project ? </label>
                <multiselect v-model="siteVisitParams.source_ids" :searchable="true"  placeholder="Select Sources" label="text" track-by="id" :options="siteData.sources" :multiple="true" :taggable="true"></multiselect>

                 <div id="dashed" class="border-dashed border-2 mt-10 mb-10 border-light-black-500 ..."></div>

                <label class="block text-black-500 text-sm font-bold mt-5" for="grid-first-name">Requirements </label>
                <label class="block text-gray-400 text-xs  mt-5 mb-2" for="grid-first-name">Residential</label>
                <t-select v-model="siteVisitParams.resident_config" placeholder="Select Residential" :options="['1BHK', '2BHK', '3BHK', 'SHOPS']" />

                <label class="block text-gray-400 text-xs  mt-5 mb-2" for="grid-first-name">Status</label>
                <t-select v-model="siteVisitParams.building_status" placeholder="Select Status" :options="['Under Construction', 'Nearing Completion', 'Ready Possession']" />

                <label class="block text-gray-400 text-xs mt-5" for="grid-first-name">Budget</label>
                <t-input v-model="siteVisitParams.budget"  class="mt-2" type="number" name="my-input" />

                <div id="dashed" class="border-dashed border-2 mt-10 mb-10 border-light-black-500 ..."></div>

                <label class="block text-black-500 text-sm  font-bold mt-5 " for="grid-first-name">Housing Loan / Bridge Loan / LAP Requirement</label>
                <t-radio-group v-model="siteVisitParams.is_loan_require" class="mt-2" :options="[{ value: 'No', text: 'No' }, { value: 'Yes', text: 'Yes' }]" name="loan" />

                <label class="block text-gray-400 text-xs mt-5 mb-2" for="grid-first-name">Purpose of buying</label>
                <t-select v-model="siteVisitParams.purpose_of_buying" placeholder="Select Purpose of buying" :options="['Self Use', 'Investment']" />

                <label class="block text-black-500 text-sm  font-bold mt-5 " for="grid-first-name">Any customer reference you can suggest</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Full Name
                    <t-input v-model="siteVisitParams.customer_reference_name" type="text" class="mt-2"  name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Mobile Number
                    <t-input v-model="siteVisitParams.customer_reference_number" type="number"  class="mt-2" name="my-input" />
                  </label>
                </div>
                <label class="block text-black-500 text-sm mt-5" for="grid-first-name">
                  I hereby declare that the above information provided by me is correct and can be use for all future project communication
                </label>
            <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Sign in the given box
                <t-textarea v-model="siteVisitParams.address" required class="mt-2" name="my-textarea" />
              </label>
            </div> -->
              <label class="block tracking-wide text-red-500 text-md font-bold mb-2 mt-5" id="header-text-colored" for="grid-first-name">
                For Office Use Only
              </label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Project *
                <t-select v-model="siteVisitParams.project_ids" required  placeholder="Select Project" :options="siteData.projects" class="mt-2" />
              </label>
              <label class="block text-gray-400 text-xs" for="grid-first-name">Broker *
                <t-select v-model="siteVisitParams.broker_id" required  placeholder="Select Broker" :options="siteData.brokers" class="mt-2" />
              </label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4  mt-5">
              <!-- <label class="block text-gray-400 text-xs" for="grid-first-name">Closing Manager *
                <t-select v-model="siteVisitParams.name" required  placeholder="Closing Manager" :options="['Option A', 'Option B', 'Option C']" class="mt-2" />
              </label> -->
              <button class="astext" type="button" @click="brokerModal = true">+ Add New Broker</button>
            </div>
            <button id="btn_clr" type="submit" class="bg-black text-white font-bold py-2 px-4 mt-10 border rounded">
              Submit
            </button>
         </form>
          <!-- Modal -->
          <t-modal
            header="Add Broker"
            v-model="brokerModal"
          >
          <t-card class="rounded-lg">
            <form  @submit.prevent="addBroker()">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Name *
                  <t-input v-model="brokerParams.name" required  class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Email *
                  <t-input v-model="brokerParams.email" class="mt-2" type="email" required  name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Mobile *
                  <t-input v-model="brokerParams.mobile" required  type="number" class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Rera Number *
                  <t-input v-model="brokerParams.rera_number" class="mt-2" type="text" required  name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Firm Name
                  <t-input v-model="brokerParams.firm_name"  class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs font-bold" for="grid-first-name">Locality
                  <t-input v-model="brokerParams.locality" class="mt-2" type="text"  name="my-input" />
                </label>
              </div>
              <div class="flex mt-5">
                <t-button id="btn_clr" type="submit">
                  Submit
                </t-button>
              </div>
            </form>
          </t-card>
        </t-modal>
      </t-card>
    </t-card>
    </div>
</template>

<script>
/*eslint-disable */
import {companyId} from '@/assets/scripts/utility.js';
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
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
    }
  },
  data() {
    return {
      brokerModal: false,
      brokerParams: {
        name: null,
        email: null,
        mobile: null,
        rera_number: null,
        firm_name: null,
        locality: null,
      }
    }
  },
  methods: {
    addBroker() {
      this.$parent.isLoading = true
      this.$axios.post(`mobile_crm/companies/${companyId}/brokers`, {broker: this.brokerParams})
      .then(res => {
        this.$toast.success('Created!', {
          timeout: 5000
        });
        this.$parent.fetchSite();
        this.brokerParams = {}
        this.brokerModal = false
        this.siteVisitParams.broker_id = res.data.broker.id
      })
      .catch(err => {
        this.$parent.isLoading = false
        if (err.response.status === 500) {
          this.$toast.error('Server Error!', {
            timeout: 5000
          });
        } else {
          this.$parent.isLoading = false
          this.$toast.info(err.response.data.message, {
            timeout: 5000
          });
        }
      })
    },
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>