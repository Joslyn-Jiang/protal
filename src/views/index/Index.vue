<template>
    <div>
       <Box :msg="logoMsg"></Box>
       <ShowCity></ShowCity>
    </div>
</template>
<script>
export default {
name:'index',
data (){
    return {
        logoMsg:'Wise'
    }
}    
}
</script>
<style>
.index_header{
  font-size:14px;
  width:100%;
  height:35px;
  background: #F5F5F5;
}
.in_wel{
    color:#5FA3F4;
}
.in_line {
    margin-left:5%;
}
.wel-left {
    float:left;
}
.wel_right {
    float: right;
}
.go_out {
    color:red;

}
.in_center {
    text-decoration: none;
    margin-right:1%； 
}
.in_client {
    text-decoration: none;
    margin-right:1%; 
}
.in_help {
    text-decoration: none;
    margin-right:10%;
}
</style>
