<template>
<div>
   <div class="titlee">
    <span class="container">
      <br>
       Realizar Venta
      <br><br>
    </span>
  </div>
  <hr>
  <div class="margin">
 
    <Form class="container" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>
         <Col span="12" >
           <!-- <div :style="{margin: '20px', padding: '2%'}"> -->
              <Card style="width:95%">
              <div style="text-align:center">
                <p slot="title">Cliente</p>
                <img src="@/assets/client.jpg" width="128" height="128">
                <Form>
                  <FormItem prop="client" >
                    <span>Nombre:</span> 
                  <Input v-model="formValidate.client" size="large" disabled placeholder="" :style="{width: '50%'}" />
                  <modal-client @getClient="showClient"></modal-client>
                  </FormItem>
                </Form>
                   </div>
          </Card><br>
            <Card style="width:95%">
              <div style="text-align:center">
                <p slot="title">Empleado</p>
                <img src="@/assets/employee.png" width="128" height="128">
                <Form>
                  <FormItem prop="name" >
                    <span>Nombre:</span> 
                  <Input v-model="formValidate.name" size="large" disabled placeholder="" :style="{width: '50%'}" />
                  <modal-employee @getEmployee="showEmployee"></modal-employee>
                  </FormItem>
                </Form>
                   </div>
          </Card>
        
          <!-- </div> -->
        </Col>
        <Col span="12" >
      <!-- <div :style="{margin: '20px', padding: '2%'}"> -->
        
              <Card style="width:100%">
              <div style="text-align:center">
                <p slot="title">Producto</p>
                <img src="@/assets/Product.png" width="128" height="128">
                   <Form>
                  <FormItem prop="nameProduct">
                    <span>Articulo:</span> 
                  <Input v-model="formValidate.nameProduct" size="large" disabled placeholder="" :style="{width: '50%'}" />
                    <modal-product @getProduct="showProduct"></modal-product>
                  </FormItem>
                </Form>
              </div>
          </Card>
        </Card><br>
            <Card style="width:95%">
              <div style="text-align:center">
                <p slot="title">Cantidad</p>
                <img src="@/assets/plus.png" width="128" height="128"><br>
                <Form>
                  <FormItem prop="quatity" >
                    <InputNumber :max="formValidate.quatity" size="large" :min="1" v-model="formValidate.tempquatity"></InputNumber>
                    <br><Button @click="addTable">Agregar a tabla</Button>
                  
                  </FormItem>
                </Form>
                   </div>
          </Card>
          <!-- </div> -->
         </Col>
       
         </Row>
         <Row> <br>
           <Table border :columns="columns" :data="data"></Table>
         </Row>
         <Row>
           <Col span="6" offset="10">
             <FormItem>
            <Button type="success" size="large" @click="handleSubmit('formValidate')" class="space">Enviar</Button>
            <br> <Button  @click="handleReset('formValidate')"size="large" class="space">Limpiar</Button>
           </FormItem>
           </Col>
           
         </Row>
    </Form>
    
    </div>
  </div>
</template>
<script>
import modalClient from '../Modal/ModalClient'
import modalProduct from '../Modal/ModalProduct'
import modalEmployee from '../Modal/ModalEmployee'
export default {
components:{
     modalClient,
     modalProduct,
     modalEmployee
    },
  data() {
    return {
      columns1: [],
      mode: false,
      formValidate: {
        id: 0,
        idClient: 0,
        idProduct:0,
        nameProduct: null,
        client: null,
        idname: 0,
        name: null,
        quatity: null,
        tempquatity: null,
        brandProduct: null,
        price: null,
        totalBuy: null
      
      },

      ruleValidate: {
         quatity: [
          {
            required: true,
            message: "Campo vacio!"
          }
        ],
      },
      columns: [
        {
          title: "Nombre",
          key: "nameProduct",
          classnameProduct: 'demo-table-info-column',
          render: (h, params) => {
            return h("div", [
              h("strong", params.row.nameProduct)
            ]);
          }
        },
         {
          title: "Marca",
          key: "brandProduct",
          
        },
        {
          title: "Precio",
          key: "price",
          
        },
          {
          title: "Cantidad",
          key: "quatity",
          
        },
        {
          title: "SubTotal",
          key: "totalBuy",
          
        },
        
       
        {
          title: "Seleccionar",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                     this.modal = false
                      this.remove(params.index);
                    }
                  }
                },
                "Eliminar"
              )
            ]);
          }
        }
      ],
      data: [],
    };
  },
  methods: {
    addTable(){
      this.data.push({
        nameProduct: this.formValidate.nameProduct,
        brandProduct: this.formValidate.brandProduct,
        price: this.formValidate.price,
        quatity: this.formValidate.tempquatity,
        totalBuy: this.formValidate.price * this.formValidate.tempquatity

      })
    },
    showClient: function(value,value2,value3){
      this.formValidate.client = value2
      this.formValidate.idClient = value

    },
    showProduct: function(value,value2,value3, value4, value5){
      this.formValidate.nameProduct = value2
      this.formValidate.idProduct = value
      this.formValidate.quatity = value5
      this.formValidate.price = value3
      this.formValidate.brandProduct = value4

    },
    showEmployee: function(value1,value2){
      this.formValidate.idName = value1
      this.formValidate.name = value2

    },
    handleSubmit() {
         let iam = this;
      iam.$refs["formValidate"].validate(valid => {
        if (valid) {
          if (iam.formValidate.id > 0) {
            iam.$store.state.services.BuyService.updateT(iam.formValidate)
              .then(r => {
                iam.$Message.success("Editado correctamente!");
                iam.$router.push("/buy/see");
              })
              .catch(r => {
                iam.$Message.error("Error al editar!");
              });
          } else {
            iam.$store.state.services.BuyService.add(iam.formValidate)
              .then(r => {
                iam.$Message.success("Agregado correctamente!");
                iam.$router.push("/buy/see");
              })
              .catch(r => {
                iam.$Message.error("Error al agregar!");
              });
          }
        } else {
          iam.$Message.error("Error!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    remove (index) {
                this.data.splice(index, 1);
            }
  }
};
</script>

<style>
label {
  font-weight: bolder;
}

.margin {
  margin-top: 2%;
}
hr {
  color: #e8eaec;
}
.space {
  width: 50%;
  margin-top: 2%;
}
.titlee{
  font-weight: bolder;
 font-size: 18px;
 text-align: center;
 background-color: #424242;
 color: #f8f8f9;
}
</style>
