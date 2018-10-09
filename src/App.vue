<template>
  <div id="app">
     <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="80" v-model="isCollapsed" width="250px">
                <Menu  theme="dark" width="auto"  :class="menuitemClasses">
                    <MenuItem name="1">
                        <Icon @click="redirect('/')" type="ios-home" size="25" />
                        <span @click="redirect('/')">Home</span>
                </MenuItem>
                    <Submenu name="2" id="e" >
                   <template slot="title"> <!--Para proporcionar contenido a ranuras con nombre -->
                        <Icon type="ios-briefcase" size="25" />
                         <span>Empleados</span>
                    </template>
                    <MenuItem name="2-1"  >
                    <i @click="redirect('/employee/see')" class="fas fa-eye"> </i>
                       <span @click="redirect('/employee/see')">Ver Empleados</span>    
                    </MenuItem>
                    <MenuItem name="2-2">
                    <i @click="redirect('/employee/add')" class="fas fa-plus"></i>
                    <span @click="redirect('/employee/add')"> Agregar Empleados</span>
                    </MenuItem>
                </Submenu>
                 <Submenu name="3" id="c">
                    <template slot="title">
                         <Icon type="ios-people" size="25" />
                         <span>Clientes</span>
                    </template>
                    <MenuItem name="3-1" >
                    <i @click="redirect('/client/see')" class="fas fa-eye"></i>
                    <span @click="redirect('/client/see')">Ver Clientes</span> 
                    </MenuItem>
                    <MenuItem name="3-2">
                    <i @click="redirect('/client/add')" class="fas fa-plus"></i>
                    <span @click="redirect('/client/add')">Agregar Clientes</span>
                    </MenuItem>
                </Submenu>
                 <Submenu name="4" id="p">
                    <template slot="title">
                        <Icon type="ios-contact" size="25"/>
                         <span>Proveedor</span>
                    </template>
                    <MenuItem name="4-1">
                    <i @click="redirect('/provider/see')" class="fas fa-eye"></i>
                    <span @click="redirect('/provider/see')">Ver Proveedor</span>
                    </MenuItem>
                    <MenuItem name="4-2">
                    <i @click="redirect('/provider/add')" class="fas fa-plus"></i>
                   <span @click="redirect('/provider/add')"> Agregar Proveedor</span>
                    </MenuItem>
                </Submenu>
                <Submenu name="5" id="pp">
                    <template slot="title">
                     <Icon type="ios-albums" size="25"/>
                         <span>Productos</span>
                    </template>
                    <MenuItem name="5-1">
                    <i @click="redirect('/product/see')" class="fas fa-eye"></i>
                    <span @click="redirect('/product/see')"> Ver Productos </span>
                    </MenuItem>
                    <MenuItem name="5-2">
                    <i @click="redirect('/product/add')" class="fas fa-plus"></i>
                    <span @click="redirect('/product/add')">Agregar Productos </span> 
                    </MenuItem>
                </Submenu>  
                <Submenu name="6" id="v">
                    <template slot="title">
                        <Icon type="ios-cart" size="25" />
                         <span>Ventas</span>
                    </template>
                    <MenuItem name="6-1" >
                    <i @click="redirect('/buy/see')" class="fas fa-eye"></i>
                   <span @click="redirect('/buy/see')">Ver Ventas </span>  
                    </MenuItem>
                    <MenuItem name="6-2">
                    <i @click="redirect('/buy/add')" class="fas fa-plus"></i>
                    <span @click="redirect('/buy/add')">Realizar Ventas </span> 
                    </MenuItem>
                </Submenu>  
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                    <span>Sistema de Facturacion</span>
                </Header>
                <Content class="bb" :style="{margin: '20px', background: '#fff', minHeight: '887px'}">
               
                  <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    
    return {
      mode: false,
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    redirect(path) {
      if (path === undefined) return;
      this.$router.push(path);
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#p,
#pp,
#e,
#v,
#c {
  margin-top: 2em;
}
.bb{
  border-radius: 5px;
} 
span{
  font-size: 2em;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  color:azure;
  background-color: #17233d;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
  font-size: 16px;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.1s ease, transform 0.1s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.1s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.1s ease 0.1s, transform 0.1s ease 0.1s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
