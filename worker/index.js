export default {
    fetch() {
        return new Response(new Date().toLocaleString("id-ID"))
    }
}