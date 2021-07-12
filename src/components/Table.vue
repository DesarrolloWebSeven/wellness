<template>
    <div>
        <div class="row nuevo">
            <div>
                <div class="col-3 btn">Fecha</div>
                <div class="col-3 btn">Hora</div>
                <div class="col-3 btn">Consumo</div>
                <div class="col-3 btn">Precio</div>
            </div>
            <div class="col-3 btn"><input type="date" v-model="newRegister.fecha" placeholder="Fecha" required/></div>
            <div class="col-3 btn">
                <select v-model="newRegister.hora" class="small" placeholder="0-23 hr" required>
                    <option v-for="(hora, i) in horas" :key="i" :value="hora" class="small">
                        {{ hora }}
                    </option>
                </select>
            </div>
            <div class="col-3 btn"><input type="number" class="small" maxlength="4" v-model="newRegister.consumo" placeholder="0-9999" required/></div>        
            <div class="col-3 btn"><input type="number" class="medium" v-model="newRegister.precio" step="0.091866654" placeholder="0.457874" required/></div><br><br>      
            <div class="d-grid gap-2"><button @click="addOne" class="btn btn-success btn-lg">Agregar registro</button></div>
        </div>
        <br>
        <div class="total">
            <div class="col-12">Registros: <span>{{registers.length}}</span></div> 
        </div>
        <hr>
        <div>
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
                    <tr v-for="(dato,i) in registers" :key="i" @change="updateOne(i)">
                        <td><input class="btn" size="10" type="text" v-model="dato.fecha" required></td>
                        <td class="small"><input class="btn small" size="5" type="number" v-model="dato.hora" required></td>
                        <td class="small"><input class="btn small" size="5" type="number" v-model="dato.consumo" required></td>
                        <td class="medium"><input class="btn medium" size="10" step="0.091866654" type="number" v-model="dato.precio" required></td>
                        <td> {{ dato.costeHora }} </td>
                        <td class="small">
                            <button class="btn btn-danger btn-sm" @click="deleteOne(i)">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { reactive, inject } from 'vue'
import axios from 'axios'
export default {
    name:'Table',
    props:{},
    setup(){
        const registers = inject('registers')
        const horas = reactive([])
        const newRegister = reactive({})

        //Horas posibles 
        for (let i=0; i<24; i++){
            horas.push(i)
        }
 
        //Agregar un nuevo concepto a la lista
        const addOne = async () => {
            try {
                let coste = newRegister.precio*newRegister.consumo/1000
                newRegister.costeHora = coste
                newRegister.fecha.value,
                newRegister.consumo.value,
                newRegister.precio.value,
                newRegister.hora.value,
                registers.value.push(newRegister)
                const res = await axios.post(`/addOne`, newRegister)        
                    if (res.status === 200) alert(res.data.message)
                    if (res.status === 500) alert(res.data.message)
            } catch (error) {
                alert(`Ha ocurrido un error: ${error}. Todos los campos son obligatorios`)
            }
        } 

        //Actualizar un concepto de la lista
        const updateOne = async (id) => {
            try {
                registers.value[id].costeHora = (registers.value[id].precio * registers.value[id].consumo) / 1000
                const res = await axios.put(`/updateOne/${registers.value[id]._id}`, registers.value[id])
                    if (res.status === 200) alert(res.data.message)
                    if (res.status === 500) alert(res.data.message)
            } catch (error) {
                alert(`Ha ocurrido un error: ${error}. Todos los campos son obligatorios`)
            }

        }
        //Eliminar un concepto de la lista:
        const deleteOne = async (id) => {
            try {
                if(confirm("¿Seguro que desea eliminar?")){
                    const itemForDelete = registers.value.splice(id,1)
                    const res = await axios.delete(`/deleteOne/${itemForDelete[0]._id}`)
                    if (res.status === 200) alert(res.data.message)
                    if (res.status === 500) alert(res.data.message)
                }
            } 
            catch (error) {
                alert(`Ha ocurrido un error: ${error}.`)     
            }
        }

        return {
            addOne, deleteOne, updateOne,
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
td{
   input{
    border-radius: .25rem;
    border: none;
    height: 25px;
    //width: 100px;

    }
    .small{
        width: 100px;
    }
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
        max-width: 140px;
    }
    .btn-success{
        background-color:#0cbd6b;
        border-color: #0cbd6b;
        font-weight: 500;
    }
    .btn-danger{
        background-color:#eb0f3f;
        border-color: #eb0f3f;
        font-weight: 700;
    }

    @media screen and (max-width: 600px) {
       tr td:first-child {
           background: #f0f0f0;
           font-weight:bold;
           font-size:1.3em;
       }
    }
    @media only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 1024px)  {

    table, thead, tbody, th, td, tr {
        display: block;
    }
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    tr {
      margin: 0 0 1rem 0;
    }
      
    tr:nth-child(odd) {
      background: #ccc;
    }
    td {
        border: 1 solid #000;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        position: absolute;
        top: 0;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
    }
		td:nth-of-type(1):before { content: "Fecha"; }
		td:nth-of-type(2):before { content: "Hora"; }
		td:nth-of-type(3):before { content: "Consumo"; }
		td:nth-of-type(4):before { content: "Precio"; }
		td:nth-of-type(5):before { content: "Coste"; }
	}

</style>
