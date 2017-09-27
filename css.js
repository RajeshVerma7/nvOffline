module.exports = `.__nv--msgContainer{
                                        display: flex;
                                        width: 400px;
                                        height: 50px;
                                        background-color: pink;
                                        position: fixed;
                                        z-index: 100000000000000;
                                        align-items: center;
                                        will-change:transform;
                                        transition: all 0.3s ease-in-out;
                                    }
                                    .__nv--msgContainer.__nvPostion-top{
                                        top:0;
                                        transform: translateY(-102%);
                                    }
                                    .__nv--msgContainer.__nvPostion-bottom{
                                        bottom:0;
                                        transform: translateY(102%);
                                    }                      
                                    `