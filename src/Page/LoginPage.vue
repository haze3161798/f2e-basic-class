<template>
    <div class="position-relative">
        <div v-if="isPopupOpen" class="position-absolute bg-light" style="inset: 0;">
            <div class="">我是彈窗</div>
        </div>
        <div @click="isPopupOpen = true">打開彈窗</div>
        <form @submit.prevent="" class="d-flex justify-content-center align-items-center flex-column">
            <div class="mb-1">
                <span>帳號</span>
                <input v-model="loginData.account" class="form-control" type="text">
                <small class="text-danger">{{errorMsg.account}}</small>
            </div>
            <div>
                <span>密碼</span>
                <input v-model="loginData.password" class="form-control" type="text">
                <small class="text-danger">{{errorMsg.password}}<br></small>
            </div>
            <button class="btn btn-primary" @click="loginHandler">登入</button>
        </form>
        <button type="button" @click="logOut">logOut</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginData: {
                account: '',
                password: ''
            },
            errorMsg: {
                account: '',
                password: ''
            },
            isPopupOpen: false
        }
    },
    methods: {
        loginHandler() {
            const loginBody = {
                account: this.loginData.account,
                password: this.loginData.password
            }
            if (!loginBody.account) {
                this.errorMsg.account = '請輸入帳號';
                return
            }
            if ( !loginBody.password) {
                this.errorMsg.password = '請輸入密碼'
                return
            }
            /**
             * TOKEN
             * 識別碼
             */
            localStorage.setItem('__TOKEN', this.returnFakeToken())
        },
        returnFakeToken() {
            return self.crypto.randomUUID()
        },
        logOut() {
            this.$router.push('/login/aaa')
            setTimeout(() => {
                console.log(this.$route.params);
            },1000)
        },
        fetchGetData () {
            localStorage.getItem('__TOKEN')
        }
    }
}
</script>