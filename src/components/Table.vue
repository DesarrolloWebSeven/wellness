<template>
    <div class="row nuevo">
        <div class="col-3 btn"><input v-model="concepto" placeholder="Fecha"/></div>
        <div class="col-2 btn"><input type="number" size="2" v-model="cantidad" placeholder="0-23"/></div>
        <div class="col-2 btn"><input type="number" size="4" v-model="precio" placeholder="10"/></div>        
        <div class="col-2 btn"><input type="number" size="10" v-model="precio" placeholder="0.457874"/></div>        
        <div class="col-3 btn"><input type="number" size="20" v-model="precio" placeholder="0.00356987745458"/></div>       
        <div class="col-2"><button @click="agregar" class="btn btn-success">Agregar</button></div>
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
                    <button class="btn btn-danger" @click="eliminar(i)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="total">
        <div colspan="3">TOTAL: <span>{{total}}</span></div>
    </div>
</template>

<script>
import { ref, reactive, computed, watch, inject } from 'vue'
export default {
    name:'Table',
    props:{},
    setup(){
        const registers = inject('registers')
        console.log(registers.value)
        const datos=reactive([
            {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
            {concepto:'Camiseta básica chic',cantidad:4,precio:6.99},
            {concepto:'Pijama unisex',cantidad:1,precio:12.50},
            {concepto:'Deportivas Nike',cantidad:1,precio:80.00},
        ])
        let concepto=ref("")
        let cantidad=ref("0")
        let precio=ref("0.00")     
        
        //usamos computed para advertir a vue que, si cambian nuestras 
        //referencias activas, debe recalcular el total:
        const total= computed(()=>{
            let total=0
            datos.forEach(dato=>{
                total+=dato.cantidad*dato.precio
            })
            return total.toFixed(2) //2 decimales ;)
        })

        //función para agregar un nuevo concepto a la lista:
        const agregar=()=>{
            let nuevo={
                concepto: concepto.value,
                cantidad: cantidad.value,
                precio: precio.value
            }
            datos.push(nuevo)
        }
        //función para eliminar un concepto de la lista:
        const eliminar=(id)=>{
            if(confirm("¿Seguro que desea eliminar?"))
                datos.splice(id,1)
        }

        return {
            datos,
            agregar, eliminar,
            total,
            concepto,cantidad,precio,registers
        }
    }    
}
</script>

<style lang="scss" scoped>
    .total{
        font-weight:bold;
        text-align:right;
        padding-right:20px;
        background:rgb(18, 129, 92);
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
</style>
