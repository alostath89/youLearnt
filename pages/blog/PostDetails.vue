<template>
    <div>
        <div>
            <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                :aspect-ratio="16/6"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                class="rounded"
                elevation="2"
            />
            <div class="mt-10">
                <div class="d-flex">
                    <div>
                        <v-avatar
                            color="primary"
                            size="70"
                        >
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar>
                        <p class="d-flex align-center mt-1">
                            <span class="mr-1">Hamdan Ali</span>
                            <svg id="icon-verify-user" xmlns="http://www.w3.org/2000/svg" width="18.886" height="18.658" viewBox="0 0 18.886 18.658">
                                <circle
                                    id="Ellipse_3"
                                    data-name="Ellipse 3"
                                    cx="4.109"
                                    cy="4.109"
                                    r="4.109"
                                    transform="translate(5.87 5.367)"
                                    fill="#fff"
                                />
                                <path id="high-quality" d="M26.638,19.3l1.2.9a1.91,1.91,0,0,0,1.083.394l1.5.083A1.967,1.967,0,0,1,32.244,22.2l.342,1.459a1.91,1.91,0,0,0,.576,1l1.093,1.025a1.967,1.967,0,0,1,.414,2.35l-.676,1.337a1.91,1.91,0,0,0-.2,1.134L33.97,32a1.967,1.967,0,0,1-1.193,2.066l-1.377.59a1.91,1.91,0,0,0-.882.74l-.82,1.254a1.967,1.967,0,0,1-2.242.816l-1.434-.433a1.91,1.91,0,0,0-1.152,0l-1.434.433a1.967,1.967,0,0,1-2.242-.816l-.82-1.254a1.91,1.91,0,0,0-.882-.74l-1.377-.59A1.967,1.967,0,0,1,16.919,32l.178-1.488a1.91,1.91,0,0,0-.2-1.134l-.676-1.337a1.967,1.967,0,0,1,.414-2.35l1.093-1.025a1.91,1.91,0,0,0,.576-1l.342-1.459a1.967,1.967,0,0,1,1.828-1.534l1.5-.083a1.91,1.91,0,0,0,1.083-.394l1.2-.9a1.967,1.967,0,0,1,2.386,0Zm-1.958,9.44-1.3-1.3a.864.864,0,0,0-1.222,1.222l1.915,1.915a.864.864,0,0,0,1.222,0c1.154-1.154,2.295-2.321,3.444-3.48a.862.862,0,1,0-1.224-1.216Zm.765-6.949a6.435,6.435,0,1,0,4.55,1.885A6.415,6.415,0,0,0,25.445,21.787Zm4.1,2.33a5.805,5.805,0,1,0,1.7,4.105A5.787,5.787,0,0,0,29.55,24.117Z" transform="translate(-16.002 -18.893)" fill="#5986f1" fill-rule="evenodd" />
                            </svg>
                        </p>
                    </div>
                    <div class="ml-3">
                        <p class="pl-0 v-card__subtitle grey--text">
                            November 29, 2019
                        </p>
                        <h3 class="">
                            Lorem ipsum dolor sit amet, consetetur
                        </h3>
                    </div>
                </div>
                <div class="mt-5">
                    <p class="line-height-lg ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and tLorem Ipsum is simply dummy text of the printing and typesetting industry……..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and tLorem Ipsum is simply dummy text of the
                    </p>
                </div>
                <div class="d-flex flex-wrap justify-space-between mt-10">
                    <div>
                        <h4 class="text-clr">
                            Tags
                        </h4>
                        <div class="mt-3 tags">
                            <v-btn v-for="n in 3" :key="n" color="#f1f1f1">
                                tag name
                            </v-btn>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-clr">
                            Share
                        </h4>

                        <div class="mt-3 tags social-media d-flex ">
                            <a v-for="n in 3" :key="n" href="#" class="d-flex align-center justify-center" color="#f1f1f1"><i class="fab fa-facebook-f " /></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="mt-10 blog">    
            <v-row>
                <v-col
                    v-for="n in 3" 
                    :key="n"
                    cols="12"
                    md="4"                
                >                        
                    <v-card
                        class=" pb-5 mx-auto card-shadow"
                        max-width="360"                    
                    >
                        
                            <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="220px"
                            />

                            <div>
                                <v-card-title>
                                    Heading Post
                                </v-card-title>

                                <v-card-subtitle class="grey--text">
                                    November 29, 2020
                                </v-card-subtitle>
                                <v-card-text class="pb-0">
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                </v-card-text>
                            </div>                                                              
                    </v-card>
                </v-col>
            </v-row>
        </div>
        
        <div class="text-center d-flex justify-center mt-4 blog-emoji mt-10">
            <div class="cursor-pointer">
                <span class="icon">😡</span>
                <span class="mt-2 text-gray d-block">5</span>
            </div>
            <div class="cursor-pointer">
                <span class="icon">🙁</span>
                <span class="mt-2 text-gray d-block">3</span>
            </div>                    
            <div class="cursor-pointer">
                <span class="icon">😑</span>
                <span class="mt-2 text-gray d-block">1</span>
            </div>
            <div class="cursor-pointer">
                <span class="icon">😊</span>
                <span class="mt-2 text-gray d-block">2</span>
            </div>
            <div class="cursor-pointer">
                <span class="icon">😁</span>
                <span class="mt-2 text-gray d-block">5</span>
            </div>                                                            
        </div>
        <!-- Comments section-->
        <div class="mt-10">
            <h2 class="mb-3 font-weight-medium">Comments ( 5 )</h2>
            <div class="blog-comments rounded-lg pa-5">
                <!-- Start comments list-->
                <ul class="comments-list">
                    <li v-for="n in 3" :key="n" class="py-5 relative">
                        <span class="absolute body-2 cursor-pointer replay-btn">Replay</span>
                        
                        <div class="align-center d-flex">                        
                            <v-avatar
                            color="primary"
                            size="38"
                            >
                                <img class="avatar-img" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" >
                            </v-avatar>
                            <div class="ml-2">
                                <div class="d-flex mb-1">
                                    <a href="#" @click.prevent>
                                        <h4 class="blue-clr font-weight-medium">Ahmed Ali</h4>
                                    </a>
                                    <span class="ml-2 text-caption"> <font-awesome-icon color="#ABABAB" icon="fa-solid fa-calendar" /> 12/5/2022</span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis ducimus incidunt soluta? Ipsum sapiente debitis, voluptatem recusandae commodi cupiditate dolore explicabo fuga accusantium hic?
                                </p>
                                
                            </div>
                        </div>
                        <!-- Start replies-->
                        <ul class="ml-10 mt-5">
                            <li v-for="n in 2" :key="n" class="mb-3 relative">
                                <span class="absolute body-2 cursor-pointer replay-btn">Replay</span>
                                <div class="align-center d-flex">                        
                                    <v-avatar
                                    color="primary"
                                    size="38"
                                    >
                                        <img class="avatar-img" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" >
                                    </v-avatar>
                                    <div class="ml-2">
                                        <div class="d-flex mb-1">
                                            <a href="#" @click.prevent>
                                                <h4 class="blue-clr font-weight-medium">Ahmed Ali</h4>
                                            </a>
                                            <span class="ml-2 text-caption"> <font-awesome-icon color="#ABABAB" icon="fa-solid fa-calendar" /> 12/5/2022</span>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis ducimus incidunt soluta? Ipsum sapiente debitis, voluptatem recusandae commodi cupiditate dolore explicabo fuga accusantium hic?
                                        </p>                                        
                                    </div>                                    
                                </div>
                            </li>
                        </ul>
                        <!-- End replies-->
                    </li>                
                </ul>
                <!-- Start comments list-->
            </div>
            
            <div class="mt-10">
                <h2 class="mb-3 font-weight-medium">Write a comment</h2>
                <div class="rounded-lg bg-white pa-5 replay-field-box">
                    <form action="">
                        <v-textarea                     
                        rounded     
                        rows="4"                                                                          
                        class="no-shadow pt-0"                                       
                        ></v-textarea>
                        <div class="text-right">
                            <v-btn                        
                            color="#ed3439"
                            class="white--text"
                            > Comment  <font-awesome-icon class="ml-1" icon="fa-solid fa-comment" />
                            </v-btn>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     layout: 'landboard' 
}
</script>

<style>

</style>
