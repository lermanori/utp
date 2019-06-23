<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1 id="title" class="animated bounce 4s mb-5 text-xs-center display-4 font-weight-thin">
                    introduction
                </h1>
                <p id="p1" class="mb-5 text-xs-center display-1 font-weight-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae minima voluptatem sint nesciunt.
                </p>
                <p id="p2" class="text-xs-center body-2 weight-medium">
                     Vel quibusdam aut, nemo asperiores nobis sint nisi quaerat earum architecto repellat ipsum assumenda excepturi optio consectetur.
                </p>
                <p id="p3" class="text-xs-center body-2 weight-medium">
                    assets and creativity by rino avidar, code: by ori lerman.
                </p>
            </v-flex>
        </v-layout>
    </v-container>

    
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes fadeIn {
    from{opacity: 0;}
    to{opacity: 1;}
}
@keyframes leftIn {
    from{transform: translateX(-400px);}
    to{transform: translateX(0px);
        opacity: 1;}
}

@keyframes rightIn {
    from{transform: translateX(400px);}
    to{transform: translateX(0px);
        opacity: 1;}
}
#p1{
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    animation-delay: 1s;
    opacity: 0;
}
#p2{
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    animation-duration: 3s;
    opacity: 0;
}

#p3{
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    animation-delay: 3s;
    animation-duration: 3s;
    opacity: 0;
}
#title{
    /*opacity: 0;
    animation-name: ;*/
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
#subtitle{
    animation-name: leftIn;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}
#paragraph{
    
    animation-name: rightIn;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}

</style>
