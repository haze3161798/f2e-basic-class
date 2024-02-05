<template>
  <div class="container">
    <h2 class="h2 text-center pb-32 fw-bold">問題與服務</h2>
    <form @submit.prevent="submitHandler">
          <div class="row-md pb-4 flex-column">
      <div class="col-md-6 px-1 d-flex pb-2">
        <div class="text-left-size">帳號</div>
        <input  v-model="serviceData.account" placeholder="請輸入您的帳號" class="col form-control" type="text" name="" ref="testInput">
      </div>
      <div class="col-md-6 px-1 d-flex pb-2">
        <div class="text-left-size">電話</div>
        <input v-model="serviceData.phone" placeholder="請輸入您的電話" class="col form-control" type="text" name="" id="">
      </div>
    </div>
    <div class="row-md pb-4 flex-column">
      <div class="d-flex col-md-3 pb-2">
        <div class="text-left-size">通訊地址</div>
        <select v-model="serviceData.city" class="form-control pb-2 px-1" name="" id="">
          <option value="0">請選擇</option>
          <option value="1">高雄市</option>
          <option value="2">台北市</option>
        </select>
      </div>
      <div class="col-md-9 pb-2 px-1 d-flex">
        <div class="text-left-size d-md-none"></div>
        <input v-model="serviceData.address" class="form-control" type="text" name="" id="">
      </div>
    </div>
    <div class="row-md flex-column pb-2">
        <div class="text-left-size col-1">問題內容</div>
        <div class="col-11 px-1 d-flex">
          <div class="text-left-size d-md-none"></div>
          <textarea v-model="serviceData.question" class="form-control"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <button type="submit" class="btn btn-primary">送出</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      serviceData : {
        account: '',
        phone: '',
        address: '',
        city: '0',
        question: '',
      },
    }
  },
  methods: {
    submitHandler () {
      console.log(this.serviceData);
      
    }
  }
}
</script>

<style scoped>
 .text-left-size {
  display: flex;
  width: 80px;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
 }
 @media (min-width: 768px)  {
   .row-md {
    display: flex;
    flex-direction: row !important;
    margin-left: -12px;
    margin-right: -12px;
   }
 }
</style>