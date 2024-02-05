<template>
    <div class="container">
        <section>
        <h2 class="title">裝備介紹</h2>
        <div class="container py-2">
            <div class="row">
                <template v-for="item in fakeData" :key="item.id">
                    <div class="col-4 col-lg-3 col-xl-2 pb-3"  @click="setActiveId(item.id)" :class="{'bg-primary': activeId === item.id}">
                        <div class="card border-0 shadow-lg rounded-10">
                            <img :src="item.img" class="card-img-top" :alt="item.title">
                            <div class="card-body">
                                <div class="text-center fw-bolder pb-4 title" :style="{ color: item.textColor }">{{ item.title }}</div>
                                <p class="card-text overflow-auto" style="height: 120px;" v-html="item.description"></p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data () {
        return {
            fakeData: [
                {
                    id: this.uuid(),
                    title: '衝鋒槍',
                    description: '衝鋒槍的特色：<br>射速快、子彈多、槍枝短小輕巧<br>，適合喜歡首當其衝的人群使用。',
                    img: '../../../public/img/P90.png',
                    textColor: '#00ff00',
                    if: 1
                },
                {
                    id: this.uuid(),
                    title: '步槍',
                    description: '步槍的特色： 泛用型、適合中距離，亦可裝上各類瞄具，適合廣泛大眾使用。',
                    img: '../../../public/img/hk-416.png',
                    textColor:'#ff00ff',
                    if: 2
                },
            ],
            activeId: ''
        }
  },
  methods: {
    uuid () {
        return self.crypto.randomUUID()
    },
    setActiveId (id) {
        this.activeId = id
    }
  }
}
</script>

<style scoped>
.title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding: 32px 0;
}
</style>