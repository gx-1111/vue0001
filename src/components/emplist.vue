<template>
  <div >
   <table class="table table-bordered">
				<caption>雇员信息列表</caption>
				<thead>
					<tr>
						<th>姓名</th>
						<th>年龄</th>
						<th>性别</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="emp in emps">
						<td>{{emp.name}}</td>
						<td>{{emp.age}}</td>
						<td>{{emp.sex}}</td>
						<td>
							<button class="btn-default btn" v-on:click="del(emp.eid)">删除</button>
							<button class="btn-default btn" v-on:click="upd(emp.eid)">修改</button>
						</td>
					</tr>

				</tbody>
			</table>
    
  </div>
</template>

<script>
export default {
  name: 'emplist',
  data(){
  	return{
  		emps:[]
  	}
  },
  created(){
  	this.loadEmp();
  },
  methods:{
  	loadEmp:function(){
  		this.$http.get("http://localhost:8081/emp").then(
  			function(result){
  				this.emps=result.body;
  			},
  			function(error){
  				alert("出现错误，请联系管理员"+error);
  			}
  		)
  	},
  	del:function(eid){
  		this.$http.delete("http://localhost:8081/emp",{
  			params:{
  				eid:eid
  			}
  		}).then(
  			function(result){
  				this.emps=result.body;
  			},
  			function(error){
  				alert("出现错误，请联系管理员"+error);
  			}
  		)
  	},
  	upd:function(eid){
  		this.$router.push({
  			path:"/EmpUpdate",
  			query:{
  				eid:eid
  			}
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
