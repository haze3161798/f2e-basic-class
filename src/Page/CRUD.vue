<template>
    <div class="position-relative flex-grow-1">
        <div v-if="!toDoList.length" class="position-absolute d-flex justify-content-center align-items-center" style="inset: 0; background-color: rgba(225, 225, 225, 0.6);">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <form  @submit="add">
            <input :disabled="!Boolean(toDoList.length)" id="testLifeCycle" ref="testLifeCycle" class="form-control"  v-model="catchName" type="text">
            <button :disabled="!Boolean(toDoList.length)" type="submit" class="btn btn-primary me-2">
                <span v-if="toDoList.length">新增</span>
                <div v-else class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </button>
            <button type="button" class="btn btn-dark" @click="clearStorage">清空</button>
        </form>
        <template v-if="toDoList.length">
            <div v-for="(item, index) in toDoList" :key="item.id">
                <div class="d-flex align-items-center">
                    <form v-if="activeId === item.id" @submit.prevent="updateSubmit(item.id)">
                        <input class="form-control" v-model="catchUpdateName" type="text">
                    </form>
                    <div v-else class="mx-1">{{index+ 1 + item.name }}</div>
                    <button class="mx-1 btn btn-danger" @click="deleteToDo(item.id)">刪除</button>
                    <button v-if="activeId === item.id" class="mx-1 btn btn-primary" @click="updateSubmit(item.id)">確認</button>
                    <button v-else class="mx-1 btn btn-primary" @click="onUpdate(item.id, item.name)">修改</button>
                </div>
            </div>
        </template>
    </div>
    <!-- <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div> -->
    <!-- <div class="text-center" @click="consoleLog">
        1
        <div @click="consoleLog($event,'2')">
            2
            <div @click="consoleLog($event,'3')">3
                <div @click="consoleLog($event,'4')">4</div>
            </div>
        </div>
    </div> -->
</template>

<script>
import { mockApi } from '../utils'
export default {
    data () {
        return {
            toDoList: [
             
            ],
            doneList : [],
            catchName: '',
            activeId: '',
            catchUpdateName: '',
            intervalId: '',
            isAdd: true,
            start : '*',
            index: 1,
            catchId: ''
    }},
   
    async created () {
        const res = await mockApi()
        this.toDoList = res.data
        console.log(res);
        // this.init()
   
        // setInterval(() => {
        //     if (this.index < 10 && this.isAdd) {
        //         this.index ++
              
        //       this.start = this.start + '*'
        //       const str = this.start.split('').join('%c')
        //         // this.consoleLog(`%c${str}`, ...this.color)
        //       console.log(`%c${str}`, eval(...this.color));
        //       if (this.index === 10) {
        //         this.isAdd = false
                
        //       }
                
        //     }
        //     else if (this.index > 0 && !this.isAdd) {
        //         this.index --
        //         this.start = this.start.slice(0, -1)
        //         console.log(`%c${this.start}`,`color: #ff0000`);
        //         if (this.index === 1) {
        //             this.isAdd = true
                    
        //         }
        //     }
        // },100)  
    },
    computed: {
        color () {
            let color = ['"color:#ff0000"', '"color:#ffff00"', '"color:#00ff00"', '"color:#00ffff"', '"color:#0000ff"', '"color:#ff00ff"', '"color:#ff0000"', '"color:#ffff00"', '"color:#00ff00"', '"color:#00ffff"']
            const col = color.slice(10 - this.index - 1)
            
            return col
        }
    },
    methods: {
        onDrag(e) {
            console.log('drag',e);
        },
        onMouseUp(e) {
            console.log("onMouseUp",e);
        },
        onMouseDown (e) {
            console.log("onMouseDown",e);    
        },
        async consoleLog () {
            // 非同步處理
            // console.log('我是非同步處理 start');
           
            // console.log(res.data);
            // console.log('我是非同步處理 end');
            // try {
            //     const target = this.toDoList.find((p)=> p.id === '175c7049-cff1-4325-8f92-74bd4a0ce80')
            //     if (!target) {
            //         throw new Error('找不到目標')
            //     }
            //     console.log(target);
            // } catch (error) {
            //     console.log('我是 catch',error);
            // }
      
        },
        clearStorage() {
            localStorage.clear()
            this.toDoList = []
        },
        init () {
            const body = JSON.parse(localStorage.getItem('toDoList'))
            if (body && Array.isArray(body)) {
                    body.forEach((item) => {
                    this.toDoList.push(item)
                    this.catchId = item.id
                    console.log(this.catchId);
                })
                
            } else {
                this.setStorage('toDoList', this.toDoList)
            }
            
        },
        setStorage (key, value) {
            localStorage.setItem(key, JSON.stringify(value))
        },
        uuid () {
            return self.crypto.randomUUID()
        },
        add(e) {
            e.preventDefault()
            console.log(e);
            const body = {
                id: this.uuid(),
                name: this.catchName
            }
            this.toDoList.push(body)
            this.catchName = ''
            this.setStorage('toDoList', this.toDoList)
        },
        onUpdate (id, name) {
            this.activeId = id
            this.catchUpdateName = name
        },
        updateSubmit (id) {
            this.toDoList.forEach((item) => {
                if (item.id === id) {
                    item.name = this.catchUpdateName
                }
            })
            this.setStorage('toDoList', this.toDoList)
            this.activeId = ''
        },
        deleteToDo (id) {
            this.toDoList = this.toDoList.filter((item) => item.id !== id)
            this.setStorage('toDoList', this.toDoList)
        }
    }
}
    /**
     * CRUD
     * C = Create
     * R = Read
     * U = Update
     * D = Delete
     */
    // Done / 
    /**
     * cookie localStorage sessionStorage
     * 共通點 都是存取用
     * cookie: 特色 會在 送出請求時 一起帶出 前端不建議直接操作 容易被攔截重要資訊 後端可操作
     * localStorage: 鎖在本地端(瀏覽器) 需要的時候才由前端存取 瀏覽器關閉後 會繼續存在 除非你手動刪除(清除)
     * sessionStorage: 鎖在本地端(瀏覽器) 需要的時候才由前端存取 瀏覽器關閉後 會直接刪除
     */
    /**
     * 冒泡
     * 捕獲
     */
</script>
