<template>
    <div class="bg">
        <div class="container">
            <br>
            <div class=" bg-light text-center">
                <div class="fs-1">{{ client.name }}</div>
                <div>
                    
                    <div class="fs-2">
                        <i class="bi bi-trophy-fill"></i> 
                        {{ client.lesBookPoints }} Lesbook pontos.
                    </div>    
                </div>
            </div>
            <br>
            <div class="d-flex m-5 justify-content-around paddingOptions">
                <div class="">
                    <router-link :to="{ path: `/client/${client.client_id}` }" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-person-lines-fill fontSizeIcon"></i>
                    </router-link>
                </div>
                <div class="">
                    <router-link :to="{ path: `/client/${client.client_id}/password` }" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-shield-lock-fill fontSizeIcon"></i>
                        <!-- <label for="basic-url" class="form-label fs-3">Segurança</label> -->
                        <!-- <div class="form-text">Altere sua senha.</div> -->
                    </router-link>
                </div>
                <div class="">
                    <router-link :to="{ path: `/client/${client.client_id}/cards` }" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-credit-card-2-front-fill fontSizeIcon"></i>
                        <!-- <label for="basic-url" class="form-label fs-3">Meus cartões</label>
                        <div class="form-text">Gerencie seus cartões.</div> -->
                    </router-link>
                </div>
                <div class="">
                    <router-link :to="{ path: `/client/${client.client_id}/address` }" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-house-gear-fill fontSizeIcon"></i>
                    </router-link>
                </div>

                <div class="iconSize">
                    <router-link :to="{ path: `/client/${client.client_id}/coupon` }" type="button" class="btn btn-light border text-reset">
                        <i class="bi bi-ticket-detailed-fill fontSizeIcon"></i>
                    </router-link>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { getClientById } from '../services/modules'
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'
export default {
    name: "ProfileClientView",
    data: function() {
        const { params } = useRoute();
        // forced error = not exist client 1
        const CLIENT_ID_HARD_CODE = 7

        let client = {
            name: '',
            lesBookPoints: '',
            client_id: CLIENT_ID_HARD_CODE
        };

        getClientById(params.client_id)
            .then((client) => {
                const { id, name, ranking } = client

                if (!id) {
                    throw 'ERROR CLIENT ID';
                }

                this.client.client_id = id.toString();
                this.client.name = name;
                this.client.lesBookPoints = ranking ? ranking.lesBookPoints : 0;
            })
            .catch((err) => {
                console.log('Falha na consulta getClientById', err);
            })

        return {
            client
        }
    },
}
</script>

<style>
.bg{
    background-color: rgba(94, 91, 91, 0.192);
}

.fontSizeIcon {
    font-size: 90px;
}

.paddingOptions {
    padding-bottom: 100px !important
}
</style>