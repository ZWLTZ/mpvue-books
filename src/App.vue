<script>
import { get } from "@/utils/index"

export default {
  	async created() {
		  const res = await get("/weapp/test")
		  console.log(res,"123")
	  }
};
</script>

<style>
</style>
