<template>
<div >
  <div class="titlee">
    <span class="container">
      <br>
      {{addTitle }}
      <br><br>
    </span>
    
  </div>
  <hr>
  <div class="margin">
    <Form class="container" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>
         <Col span="12">
          <div :style="{margin: '20px', padding: '2%'}">
        <FormItem  prop="name">
          <label for="">Nombre:</label>
            <Input v-model="formValidate.name"  clearable size="large"></Input>
        </FormItem>
        <FormItem  prop="lastName">
          <label for="">Apellidos:</label>
            <Input prefix="ios-checkmark" v-model="formValidate.lastName"  clearable size="large"></Input>
        </FormItem>
         <FormItem  prop="dni">
           <label for="">Cedula:</label>
            <Input type="text" v-model="formValidate.dni"  clearable size="large"></Input>
        </FormItem>
        <FormItem  prop="company">
          <label for="">Compañia:</label>
            <Input type="text" v-model="formValidate.nameCompany"  clearable size="large"></Input>
        </FormItem>
       
         </div>
        </Col>
        <Col span="12" >
        <div :style="{margin: '20px', padding: '2%'}">
        <FormItem  prop="mail">
          <label for="">E-mail:</label>
            <Input v-model="formValidate.email" clearable size="large"></Input>
        </FormItem>
         <FormItem prop="address">
           <label for="">Direccion:</label>
            <Input v-model="formValidate.address"  clearable size="large"></Input>
        </FormItem>
         <FormItem  prop="telephone">
           <label for="">Telefono:</label>
            <Input type="text" v-model="formValidate.telephone"  clearable size="large" ></Input>
        </FormItem>
       <FormItem>
            <Button type="success" size="large" @click="handleSubmit('formValidate')">Enviar</Button>
            <Button type="Title" @click="handleReset('formValidate')"size="large"  style="margin-left: 8px">Limpiar</Button>
        </FormItem>
        </div>
         </Col>
       
         </Row>
    </Form>
    </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        id: 0,
        name: "",
        email: "",
        lastName: "",
        address: "",
        dni: "",
        telephone: "",
        nameCompany: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        lastName: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        dni: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        telephone: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        nameCompany: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Formato del correo incorrecto",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    addTitle() {
      let iam = this;
      return iam.formValidate.id == 0
        ? "Agregar Proveedor"
        : "Editar Proveedor";
    }
  },
  created() {
    let iam = this;
    iam.get(iam.$route.params.id);
  },
  methods: {
    get(id) {
      if (id == undefined) {
        return;
        }
        let iam = this;
        iam.$store.state.services.ProviderService.get(id)
        .then(t =>{
          iam.formValidate.id = t.data.id
          iam.formValidate.name = t.data.name
          iam.formValidate.lastName = t.data.lastName
          iam.formValidate.address = t.data.address
          iam.formValidate.dni = t.data.dni
          iam.formValidate.telephone = t.data.telephone
          iam.formValidate.email = t.data.email
          iam.formValidate.nameCompany = t.data.nameCompany
        }).catch(t =>{
          iam.$Message.error("Error!");
        });
      
    },
    handleSubmit() {
      let iam = this;
      iam.$refs["formValidate"].validate(valid => {
        if (valid) {
          if (iam.formValidate.id > 0) {
            iam.$store.state.services.ProviderService.updateP(iam.formValidate)
            .then(r => {
              iam.$Message.success("Edicion realizada!");
              iam.$router.push("/provider/see");
            })
            .catch(r => {
              iam.$Message.error("Error al editor!");
            });
          }else{
            iam.$store.state.services.ProviderService.add(iam.formValidate)
            .then(r => {
              iam.$Message.success("Proveedor agregado!");
              iam.$router.push("/provider/see");
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
    handleReset(formValidate) {
      let iam = this;
      iam.$refs[formValidate].resetFields();
    }
  }
};
</script>
<style>
.titlee {
  font-weight: bolder;
  font-size: 18px;
  text-align: center;
  background-color: #424242;
  color: #f8f8f9;
}
form {
  border-radius: 5px;
  background-color: #f8f8f9;
  padding: 20px;
  box-shadow: 0 1.5px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 4px 0 rgba(0, 0, 0, 0.19);
}
label {
  font-weight: bolder;
}

.margin {
  margin-top: 2%;
}
hr {
  color: #e8eaec;
}
</style>

