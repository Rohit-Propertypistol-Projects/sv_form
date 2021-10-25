<template>
  <div>
    <t-card class="bg" v-if="!showPage">
      <form @submit.prevent="showPage = true">
        <div class="form-header-logo page_margin px-16 pt-20 pb-16">
          <div class="Heading">Welcome to Hawre</div>
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
              <label class="block tracking-wide text-red-500 text-sm font-medium mb-2" id="header-text-colored" for="grid-first-name">
              Personal details
              </label>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                <label class="block text-gray-400 text-opacity-50 text-xs" for="grid-first-name">Full Name *
                  <t-input v-model="siteVisitParams.name" required  class="mt-2" name="my-input" />
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
                <label class="block text-gray-400 text-xs" for="grid-first-name">Address *
                  <t-input v-model="siteVisitParams.address" required class="mt-2" name="my-textarea" />
                </label>
              </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
              <label class="block text-gray-400 text-xs" for="grid-first-name" >Profession</label>
              <t-radio-group v-model="siteVisitParams.profession" class="text-gray-400" :options="[{ value: 'Job', text: 'Job' }, { value: 'Service', text: 'Service' }]" name="Profession"></t-radio-group>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
              <label class="block text-gray-400 text-xs" for="grid-first-name">Name of company
                <t-input v-model="siteVisitParams.company_name" type="text" class="mt-2"  name="my-input" />
              </label>
            </div>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                <label class="block text-main text-sm font-bold" for="grid-first-name">How you come to know about your project ? </label>
                 <t-select v-model="siteVisitParams.source_id" required  class="mt-2" placeholder="Select Source" :options="siteData.sources" />
                <!-- <multiselect v-model="siteVisitParams.source_ids" required :searchable="true"  placeholder="Select Sources" label="text" track-by="id" :options="siteData.sources" :multiple="true" :taggable="true"></multiselect> -->
              </div>
                <label class="block text-main text-sm font-bold mt-5" for="grid-first-name">Requirements </label>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 border-b-2 border-grey-400 border-dashed pb-10 mb-5">
                   <div>
                      <label class="block text-gray-400 text-xs mb-2" for="grid-first-name">Configuration</label>
                      <t-select v-model="siteVisitParams.configuration" placeholder="Select Residential" :options="['1BHK', '2BHK', '3BHK', 'Shop']" />
                   </div>
                <div>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Budget *</label>
                  <t-input v-model="siteVisitParams.budget"  class="mt-2" required type="number" name="my-input" />
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <label class="block text-gray-400 text-xs " for="grid-first-name">Called By *
                     <t-select v-model="siteVisitParams.user_id" required  class="mt-2" placeholder="Select Called By" :options="siteData.presale_users" />
                  </label>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Assigned To *
                    <t-select v-model="siteVisitParams.closing_executive" required  class="mt-2" placeholder="Select Assigned To" :options="siteData.closing_users" />
                  </label>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Comment</label>
                  <t-input v-model="siteVisitParams.comment" class="mt-2" name="my-textarea" />
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
import {companyId} from '@/assets/scripts/utility.js';
export default {
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
      options: {
        penColor: "black",
      },
      showPage: false,
    }
  },
}
</script>

