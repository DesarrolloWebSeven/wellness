<template>
    <div class="row nuevo">
        <div>
            <div class="col-3 btn">Fecha</div>
            <div class="col-3 btn">Hora</div>
            <div class="col-3 btn">Consumo</div>
            <div class="col-3 btn">Precio</div>
        </div>
        <div class="col-3 btn"><input type="date" v-model="newRegister.fecha" placeholder="Fecha"/></div>
        <div class="col-3 btn">
            <select v-model="newRegister.hora" class="small" placeholder="0-23 hr">
                <option v-for="(hora, i) in horas" :key="i" :value="hora" class="small">
                    {{ hora }}
                </option>
            </select>
        </div>
        <div class="col-3 btn"><input type="number" class="small" maxlength="4" v-model="newRegister.consumo" placeholder="0-9999"/></div>        
        <div class="col-3 btn"><input type="number" class="medium" v-model="newRegister.precio" step="0.091866654" placeholder="0.457874"/></div><br><br>      
        <div class="d-grid gap-2"><button @click="addOne" class="btn btn-success btn-lg">Agregar registro</button></div>
    </div>
    <br>
    <div class="total">
        <div class="col-12">Registros: <span>{{registers.length}}</span></div> 
    </div>
    <hr>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Consumo</th>
                <th>Precio</th>      
                <th>Coste/Hora</th>
                <th></th>     
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato,i) in registers" :key="i">
                <td><input size="10" type="text" v-model="dato.fecha"></td> 
                <td><input size="3" type="number" step="any" v-model="dato.hora"></td>
                <td><input size="10" type="number" v-model="dato.consumo"></td>
                <td><input size="10" type="number" v-model="dato.precio"></td>
                <td><input size="10" type="number" v-model="dato.costeHora"></td>
                <td>
                    <button class="btn btn-danger" @click="deleteOne(i)">X</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref, reactive, computed, watch, inject } from 'vue'
import axios from 'axios'
export default {
    name:'Table',
    props:{},
    setup(){
        const registers = inject('registers')
        const horas = reactive([])
        const newRegister = reactive({})

        //Llenar horas 
        for (let i=0; i<24; i++){
            horas.push(i)
        }
 
        //Agregar un nuevo concepto a la lista:
        const addOne = async () => {
            let coste = newRegister.precio*newRegister.consumo/1000
            newRegister.costeHora = coste
            newRegister.fecha.value,
            newRegister.consumo.value,
            newRegister.precio.value,
            newRegister.hora.value,
            registers.value.push(newRegister)
            const res = await axios.post(`/addOne`, newRegister)        
            console.log(res.data)
            // if (res.status === 200) {
            //     success.value = "Su mensaje se ha enviado con éxito";
            //     sendButton.classList.add('d-none')
            //     }
        } 

        //Eliminar un concepto de la lista:
        const deleteOne = async (id) => {
            if(confirm("¿Seguro que desea eliminar?")){
                const itemForDelete = registers.value.splice(id,1)
                const res = await axios.delete(`/deleteOne/${itemForDelete[0]._id}`)
                    console.log(res)
            }
        }

        return {
            addOne, deleteOne,
            registers, horas, newRegister
        }
    }    
}
</script>

<style lang="scss" scoped>
div{
    border-radius: .25rem;

}
input{
    border-radius: .25rem;
    border: none;
     height: 25px;
}
select{
    width: 100px;
    height: 25px;
    border-radius: .25rem;
    border: none;

}
    .total{
        font-weight:bold;
        text-align:left;
        padding-left:20px;
        background:rgb(82, 90, 87);
        color:#fff;
    }
    .row.nuevo{
        padding:5px;
        background:rgb(173, 182, 176);
    }

    .table{
        input{
            background: transparent;
            border: 0px;
        }
    }
    .small{
        max-width: 80px;
    }
    .medium{
        max-width: 120px;
    }
    .large{
        max-width: 180px;
    }
</style>
