module.exports = `.__nv--msgContainer{
                    display: flex;
                    width: 300px;
                    height: 50px;
                    background: #000;
                    color: #ccc;
                    padding-left: 40px;
                    position: fixed;
                    z-index: 100000000000000;
                    align-items: center;
                    will-change:transform;
                    transition: all 0.3s ease-in-out;
                }
                .__nv-msgBlock:after {
                    background: #e24949;
                }
                .__nv-msgBlock.green:after {
                    background: #80d580 !important;
                }
                .__nv--msgContainer .__nv-msgBlock:after {
                        border-radius: 50%;
                        content: " ";
                        display: block;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 1em;
                        margin: auto;
                        height: 1em;
                        width: 1em;
                }
                .__nv--msgContainer.__nvPostion-topLeft{
                    top:0;
                    left:0;
                    transform: translateY(-102%);
                }
                .__nv--msgContainer.__nvPostion-topRight{
                    top:0;
                    right:0;
                    transform: translateY(-102%);
                }
                .__nv--msgContainer.__nvPostion-topMiddle{
                    top:0;
                    left: 50%;
                    margin-left: -150px;
                    transform: translateY(-102%);
                }
                .__nv--msgContainer.__nvPostion-bottomLeft{
                    bottom:0;
                    left:0;
                    transform: translateY(102%);
                }
                .__nv--msgContainer.__nvPostion-bottomRight{
                    bottom:0;
                    right:0;
                    transform: translateY(102%);
                }
                .__nv--msgContainer.__nvPostion-bottomMiddle{
                    bottom:0;
                    left: 50%;
                    margin-left: -150px;
                    transform: translateY(102%);
                }                     
                                    `