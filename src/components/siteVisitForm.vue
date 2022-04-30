<template>
  <div>
    <t-card class="bg" v-if="!showPage">
      <form @submit.prevent="showPage = true">
        <div class="form-header-logo page_margin px-16 pt-20 pb-16">
          <div class="Heading">Welcome to CRM Dummy Builder</div>
          <img class="mx-auto mb-8" width="200px" src="@/assets/logo_square.png">
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
         <img class="mx-auto mb-8" width="200px" src="@/assets/logo_square.png">
        <p class="font-bold text-lg mb-2" id="form-header-text">Walkin / Site Visit Information Form</p>
      </div>
        <div class="form-body page_margin bottom_margin px-16">
          <t-card class="rounded-0 bg-none" style="background: transparent; box-shadow: none;">
            <form @submit.prevent="submitFn()">
                <div class="bg-white -mt-14 p-5 rounded-lg shadow-sm">
              <label class="block tracking-wide text-red-500 text-sm font-medium mb-2" id="header-text-colored" for="grid-first-name">
              Personal details
              </label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="block text-gray-400 text-opacity-50 text-xs" for="grid-first-name">Full Name *
                  <t-input v-model="siteVisitParams.name" required  class="mt-2" name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Email Address
                  <t-input v-model="siteVisitParams.email" class="mt-2" type="email"  name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <label class="block text-gray-400 text-xs " for="grid-first-name">Mobile Number *
                  <t-input v-model="siteVisitParams.mobile" type="tel" minlength="10" required class="mt-2"  name="my-input" />
                </label>
                <label class="block text-gray-400 text-xs" for="grid-first-name">Alternate Number
                  <t-input v-model="siteVisitParams.other_phones" type="tel"  minlength="10" class="mt-2" name="my-input" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Address *
                  <t-textarea v-model="siteVisitParams.address" required class="mt-2" name="my-textarea" />
                </label>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-5">
                <label class="block text-main text-sm font-bold" for="grid-first-name">How you come to know about your project ? </label>
                 <t-select v-model="siteVisitParams.source_id" required  class="mt-2" placeholder="Select Source" :options="siteData.sources" />
                <!-- <multiselect v-model="siteVisitParams.source_ids" required :searchable="true"  placeholder="Select Sources" label="text" track-by="id" :options="siteData.sources" :multiple="true" :taggable="true"></multiselect> -->
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4  mt-5" v-if="is_ChannelPartner">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Channel Partner
                   <t-select v-model="siteVisitParams.broker_id" required  class="mt-2" placeholder="Select Channel Partner" :options="siteData.brokers" />
                </label>
                <button class="astext" type="button" @click="brokerModal = true">+ Add New Channel Partner</button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                <label class="block text-gray-400 text-xs" for="grid-first-name">Sub Source
                  <t-input v-model="siteVisitParams.sub_source" class="mt-2" type="text" name="my-input" />
                </label>
              </div>
                <label class="block text-main text-sm font-bold mt-5" for="grid-first-name">Requirements </label>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 border-b-2 border-grey-400 border-dashed pb-10 mb-5">
                   <div>
                      <label class="block text-gray-400 text-xs mb-2" for="grid-first-name">Configuration</label>
                      <t-select v-model="siteVisitParams.configuration" placeholder="Select Residential" :options="['1 RK', 'Studio', '1 BHK', '2 BHK', '3 BHK', '3.5 BHK', '4 BHK', '5 BHK', 'Shop', 'Office']" />
                   </div>
                <div>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Budget *</label>
                  <!-- <t-input v-model="siteVisitParams.budget"  class="mt-2" required type="number" name="my-input" /> -->
                  <t-select v-model="siteVisitParams.client_budget" class="mt-2" required placeholder="Select Budget" :options="['10 Lakh to 20 Lakh', '20 Lakh to 30 Lakh', 
                  '30 Lakh to 40 Lakh', '40 Lakh to 50 Lakh', '50 Lakh to 60 Lakh', '60 Lakh to 70 Lakh', '70 Lakh to 80 Lakh', '80 Lakh to 90 Lakh', '90 Lakh to 1 Cr', '1 Cr to 1.25 Cr',
                  '1.25 Cr - 1.5 Cr', '1.5 Cr to 1.75 Cr', '1.75 Cr to 2 Cr', '2 Cr to 2.25 Cr', '2.25 Cr to 2.5 Cr', '2.5 Cr & Above']" />
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Assigned To *
                    <t-select v-model="siteVisitParams.closing_executive" required  class="mt-2" placeholder="Select Assigned To" :options="siteData.closing_executives" />
                  </label>
                  <div id="app" class="web-camera-container">
                      <div class="camera-button ">
                        <button type="button" class="button is-rounded flex items-center justify-center" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                           <img src="@/assets/photo-camera.svg" class="opacity-80 mr-2 w-8" >
                          <span v-if="!isCameraOpen">Open Camera</span>
                          <span v-else>Close Camera</span>
                      </button>
                    </div>
                      <div v-if="isCameraOpen"  class="camera-box" :class="{ 'flash' : isShotPhoto }">
                        
                        <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
                          
                        <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" class="my-4" autoplay></video>
                        
                        <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" class="my-4" :height="337.5"></canvas>
                      </div>
                      <div class="flex w-full  justify-center relative ">
                        <div v-if="isCameraOpen" class="camera-shoot mx-auto border border-gray-300 bg-gray-100 p-2 w-14 h-14 rounded-full">
                            <button type="button" class="button" @click="takePhoto">
                              <img src="@/assets/capture.svg" class="opacity-80">
                            </button>
                          </div>
                          <div  v-if="isCameraOpen" class="camera-shoot absolute right-0 camera-shoot mx-auto border border-gray-300 bg-gray-100 p-2 w-12 h-12 rounded-full">
                            <button type="button" class="button" @click="switchCamera">
                              <img src="@/assets/flip-camera.svg" class="opacity-80">
                            </button>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="relative">
                    <label for="" class="text-main text-gray-400 block mb-2">Add Photo</label>
                    <label for="upload"
                      class="text-center rounded-md border border-inputBorder bg-grey  h-24  flex flex-col items-center justify-center">
                       <input type="file" ref="file" id="upload" class="hidden" @change="selectedFile">
                       <img src="@/assets/upload-icon.svg" alt="">
                      <span class="text-main text-opacity-50 text-sm font-medium block mt-1">{{  photo_attributes ? photo_attributes: '' }}</span>
                     </label>
                    <p class="text-main text-opacity-50 text-sm font-medium block mt-1 text-center">Image files type accept .jpg .png</p>
                  </div>
                  <label class="block text-gray-400 text-xs" for="grid-first-name">Comment
                    <t-textarea v-model="siteVisitParams.comment" class="mt-2 h-24" name="my-textarea" />
                  </label>
                  </div>
                <button id="btn_clr" type="submit" class="bg-black text-white py-2 px-8 mt-10 border rounded text-base font-medium">
                  Submit
                </button>
          </div>
         </form>
          <!-- Modal -->
          <t-modal
            v-model="brokerModal"
            class="p-4"
          >
            <t-card class="rounded-lg p-6">
              <h3 class="text-main mb-5 font-medium text-base">Add Channel Partner</h3>
              <form  @submit.prevent="addBroker()">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <label class="block text-gray-400 text-sm " for="grid-first-name">Name *
                    <t-input v-model="brokerParams.name" required  class="mt-2" name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-sm " for="grid-first-name">Email
                    <t-input v-model="brokerParams.email" class="mt-2" type="email"  name="my-input" />
                  </label>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <label class="block text-gray-400 text-sm" for="grid-first-name">Mobile *
                    <t-input v-model="brokerParams.mobile" required  minlength="10" type="tel" class="mt-2" name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-sm" for="grid-first-name">Rera Number
                    <t-input v-model="brokerParams.rera_number" class="mt-2" type="text" name="my-input" />
                  </label>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  <label class="block text-gray-400 text-sm" for="grid-first-name">Firm Name
                    <t-input v-model="brokerParams.firm_name"  class="mt-2" name="my-input" />
                  </label>
                  <label class="block text-gray-400 text-sm" for="grid-first-name">Locality
                    <t-input v-model="brokerParams.locality" class="mt-2" type="text"  name="my-input" />
                  </label>
                </div>
                <div class="flex mt-8">
                  <t-button id="btn_clr" type="submit" class="px-8 text-base font-medium">
                    Submit
                  </t-button>
                </div>
              </form>
            </t-card>
          </t-modal>
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
    },
    selectedFile: {
      type: Function,
    },
    photo_attributes: {
      type: String
    }
  },
  data() {
    return {
      options: {
        penColor: "black",
      },
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      photos: [],
      videoDevices: [],
      mediaStream: null,
      facingMode: "environment",
      switchingCamera: false,
      showPage: false,
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
  computed: {
    is_ChannelPartner() {
      return this.siteData.cp_sources_ids.includes(parseInt(this.siteVisitParams.source_id))
    },
  },
  methods: {
    addBroker() {
      this.$parent.isLoading = true
      this.$axios.post(`mobile_crm/companies/${companyId}/brokers`, {broker: this.brokerParams})
      .then(res => {
        swal({
          title: "Success!",
          icon: "success",
        }).then (
          this.$parent.fetchSite(),
          this.brokerParams = {},
          this.brokerModal = false,
          this.siteVisitParams.broker_id = res.data.broker.id,
        )
      })
      .catch(err => {
        this.$parent.isLoading = false
        if (err.response.status === 500) {
          swal({
            title: "Server Error!",
            icon: "error",
          });
        } else {
          this.$parent.isLoading = false
          swal({
            title: "Error",
            text: err.response.data.message,
            icon: "error",
          });
        }
      })
    },
    async switchCamera() {
      this.switchingCamera = true;
      const tracks = this.mediaStream.getVideoTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      await this.createCameraElement(
        this.facingMode === "environment" ? "user" : "environment"
      );
      this.switchingCamera = false;
    },
    async toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        const devices = await navigator.mediaDevices.enumerateDevices();
        this.videoDevices = devices.filter((d) => d.kind === "videoinput");
        await this.createCameraElement(
          this.videoDevices.length === 1 ? "user" : "environment"
        );
      }
    },
    async createCameraElement(facingMode) {
      this.facingMode = facingMode;
      let video = this.$refs.camera;
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facingMode },
      });
      video.srcObject = this.mediaStream;
      return await video.play();
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    },
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;
        const FLASH_TIMEOUT = 50;
        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      this.isPhotoTaken = !this.isPhotoTaken;
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      this.siteVisitParams.image = document.getElementById("photoTaken").toDataURL("image/jpeg")
    },
  }
}
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
}

.web-camera-container {
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfdfe8;
  border-radius: 4px;
  width: 100%;
}
  
#photoTaken {
  width: 100%;
}
</style>