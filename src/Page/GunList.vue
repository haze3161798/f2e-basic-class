<template>
    <div style="background-color: #1B6026D9; opacity: 0.7;">
        <div class="container d-flex align-items-center">
            <div class="flex-shrink-0 pe-3 py-3">搜尋</div>
            <input class="form-control" type="text" v-model="searchText" style="width: 220px;">
        </div>
    </div>
    <div class="py-5 container">
        <div style="margin-left: 40px; margin-right: 40px;">
            <div class="row">
                <div class="col-6 pb-5" v-for="gun in gunListFilter" :key="gun.id">
                    <GunListDetail @showAlert="showAlert" :type="gun.type" :name="gun.name" :img="gun.img"></GunListDetail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GunListDetail from '@/components/GunListDetail.vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    components: {
        GunListDetail
    },
    data() {
        return {
            searchText: '',
            gunList: [
                {
                    id: this.createUuid(),
                    img: '../../public/img/p90.png',
                    name: 'P90',
                    type: '衝鋒槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/uzi.png',
                    name: 'UZI',
                    type: '衝鋒槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/tml6.png',
                    name: 'TML6',
                    type: '衝鋒槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/ak47.png',
                    name: 'AK47',
                    type: '步槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/scar.png',
                    name: 'SCAR',
                    type: '步槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/hk416.png',
                    name: 'HK416',
                    type: '步槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/t65k2.png',
                    name: 'T65K2',
                    type: '步槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/1911.png',
                    name: '1911',
                    type: '手槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/cma.png',
                    name: 'CMA',
                    type: '手槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/revolver.png',
                    name: 'Revolver',
                    type: '手槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/glock17.png',
                    name: 'Glock17',
                    type: '手槍',
                },
                {
                    id: this.createUuid(),
                    img: '../../public/img/glock19.png',
                    name: 'Glock19',
                    type: '手槍',
                },
            ]
        }
    },
    methods: {
        createUuid () {
            return self.crypto.randomUUID()
        },
        showAlert (param) {
            Swal.fire(param.gunType, param.gunName)
        }
    },
    computed: {
        reg() {
            return new RegExp(`${this.searchText}`, '' )
        },
        gunListFilter () {
          if (this.searchText) {
            return this.gunList.filter((p) => this.reg.test(p.name))
          }
          return this.gunList
        }
    }
}
</script>