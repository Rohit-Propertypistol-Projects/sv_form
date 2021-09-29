<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
/*eslint-disable */
import index from './views/index.vue'
export default {
  name: 'App',
  components: {
    index
  }
}
</script>
<style>
.loader-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999!important;
  overflow: hidden;
  top: 0;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}
 .loader-wrapper{
    background: #f5f5f5;
    background-size: cover;
    height: 100vh;
  }
  .loader-wrapper:after {
  content: "";
  top: 0;
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  animation: slide 1s infinite;
  background: -moz-linear-gradient( left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);
 /* FF3.6+ */
  background: -webkit-gradient( linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(50%, rgba(255, 255, 255, 0.8)), color-stop(99%, rgba(128, 186, 232, 0)), color-stop(100%, rgba(125, 185, 232, 0)));
 /* Chrome,Safari4+ */
  background: -webkit-linear-gradient( left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);
 /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient( left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);
 /* Opera 11.10+ */
  background: -ms-linear-gradient( left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);
 /* IE10+ */
  background: linear-gradient( to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(128, 186, 232, 0) 99%, rgba(125, 185, 232, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8', GradientType=1);
 /* IE6-9 */
}
@keyframes slide {
  0% {
      transform: translateX(-100%);
 }
  100% {
      transform: translateX(100%);
 }
}
  .loader-wrapper .loader,   .loader-wrapper .loader:before, .loader-wrapper .loader:after {
    background: #f58734;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: .7em;
    height: 4em;
  }
  .loader-wrapper .loader {
    color: #f58734;
    text-indent: -9999em;
    margin: 0 auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    display: table;
    z-index: 9999;
    top: 50%;
  }
  .loader-wrapper .loader:before,
  .loader-wrapper  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader-wrapper .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader-wrapper  .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
.multiselect__tag {
  background: #ffa151 !important;
}
[type='checkbox']:checked, [type='radio']:checked {
  background-color: #ffa151 !important;;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 10;
}
.flex-col {
  flex-direction: row !important;
  gap: 20px;
}
/* .bg{
  background: linear-gradient(
  180deg, #CEDBE4 14.2%, #F1F6F9 14.21%);
} */
.form-header {
    background:#CEDBE4 ;
}
.form-header-logo {
  background:#CEDBE4 ;
  height: 100vh;
}
.form-body {
    background:#F1F6F9 ;
}
#form-header-text{
    letter-spacing: -0.01em;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #02044A;
}
#header-text-colored{
    letter-spacing: 0.01em;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #E66A20;
    margin-bottom: 23px;
    margin-top: 10px;
}
#dashed{
  background-color:  #DFDFE8;
  border-width: 1px;
  border-style: dashed;
}
.text-gray-400 {
  color: #02044A75 !important;
  font-size: 13px !important;
}
.text-main {
   color: #02044A;
}
#btn_clr {
  background-color: #02044A;;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  }
  .astext {
    background:none;
    border:none;
    margin-top:20px;
    cursor: pointer;
    flex-flow: column-reverse;
    margin-top: 32px;
}
  @media all and (min-width:200px) and (max-width: 600px) {
    .page_margin {
      padding-left: 0.8rem !important;
      padding-right: 0.8rem !important;
    }
  }
    .page_margin {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }

  @media all and (min-width:200px) and (max-width: 600px) {
    .bottom_margin {
      padding-bottom: 0.8rem !important;
    }
  }
    .bottom_margin {
      padding-bottom: 3rem;
    }

/* New css */
 .p-3 {
    padding: 0!important;
  }
  input[type='radio'] {
    border-width: 5px;
  }
  .multiselect__tag-icon:after {
        color: #ffffff;
  }
  .multiselect__option--highlight {
     background: #02044A;
  }
   .multiselect__option--highlight:after {
     background: #02044A;
  }
  #signature {
  background: #FFFFFF;
  border: 1px dashed #DFDFE8;
  box-sizing: border-box;
  border-radius: 6px;
}
.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}
.swal-modal {
  width: 350px;
}
.swal-button {
  background-color: #02044A !important;
}
</style>
