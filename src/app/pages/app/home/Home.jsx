import React, {useEffect, useState} from "react";
import {Auth} from "../../../../helpers/auth/Auth";
import {host} from "../../../../helpers/const/uri";
import {PopUp} from "../../popUp/PopUp";
import {Elips} from "../../../../public/icon/elips";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Photo} from "../../../../public/icon/photo";
import {GreetingText} from "../../../components/GreetingText";

export const Home = () => {
    const [firstEntrance, setFirstEntrance] = useState(false);

    function handleCloseFirstEntrancePopUp() {
        setFirstEntrance(false);
    }

    const token = Auth.getToken();

    useEffect(() => {
        const abortController = new AbortController();

        async function handleUserFirstEntranceRequest() {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', `${token.token_type} ${token.token}`);
            await fetch(`${host}/api/user/update`, {
                method: "POST",
                headers: headers,
                signal: abortController.signal,
                body: JSON.stringify({first_entrance: false})
            });
        }

        if (token && token.first_entrance === true) {
            setFirstEntrance(true);
            handleUserFirstEntranceRequest();
            token.first_entrance = false;
            Auth.setToken(token);
        }
        return () => {
            abortController.abort()
        }
    }, [token]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
            height: 'calc(100vh - 90px)'
        }}>
            <GreetingText/>
            <div style={{width: '80vw', display: "flex", justifyContent: "space-evenly", height: '90%'}}>
                <div style={{display: 'flex', justifyContent: "space-between", flexFlow: "column", height: '85%'}}>
                    <div style={{boxShadow: '0px 4px 50px rgba(228, 228, 228, 0.25)', borderRadius: 14, padding: 20}}>
                        <div style={{display: 'flex', justifyContent: "space-around"}}>
                            <div>
                                <div style={{fontSize: 28, fontWeight: "bold"}}>Personal Feedback</div>
                                <div style={{width: 350, fontSize: 16}}>Welcome back! You posted review last time 5 days
                                    ago - do you have something to say?
                                </div>
                            </div>
                            <div>
                                <Link to={'/feedback-forum'}>
                                    <Button>Post Feedback</Button>
                                </Link>
                            </div>
                        </div>
                        <div style={{display: 'flex', padding: '15px 60px', alignItems: "center"}}>
                            <Photo/>
                            <div style={{margin: '5px 10px'}}>
                                <div>Brenda Walker</div>
                                <div style={{width: 450}}>Police officer was prompt and friendly. Fortunately, the case
                                    was solved quickly
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <Link to={'/feedback-forum'}>
                                View All
                            </Link>
                        </div>
                    </div>
                    <div style={{boxShadow: '0px 4px 50px rgba(228, 228, 228, 0.25)', borderRadius: 14, padding: 20}}>
                        <div style={{display: 'flex', justifyContent: "space-around"}}>
                            <div>
                                <div style={{fontSize: 28, fontWeight: "bold"}}>Recent Feedback</div>
                                <div style={{width: 350, fontSize: 16}}>5 new feedbacks posted since March, 5</div>
                            </div>
                            <div>
                                <Link to={'/feedback-forum'}>
                                    <Button>View Feedback</Button>
                                </Link>
                            </div>
                        </div>
                        <div style={{display: 'flex', padding: '15px 60px', alignItems: "center"}}>
                            <Photo/>
                            <div style={{margin: '5px 10px'}}>
                                <div>Sara Parker</div>
                                <div style={{width: 450}}>Police officer was prompt and friendly. Fortunately, the case
                                    was solved quickly
                                </div>
                            </div>
                        </div>
                        <div
                            style={{display: 'flex', padding: '15px 60px', alignItems: "center", position: "relative"}}>
                            <Photo/>
                            <div style={{margin: '5px 10px'}}>
                                <div>Sara Parker</div>
                                <div style={{width: 450}}>Police officer was prompt and friendly. Fortunately, the case
                                    was solved quickly
                                </div>
                            </div>
                            <div style={{
                                width: '100%',
                                height: '55%',
                                filter: 'blur(10px)',
                                position: 'absolute',
                                top: 45,
                                left: 0,
                                backgroundColor: 'white'
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexFlow: "column",
                    height: '85%',
                    boxShadow: '0px 4px 50px rgba(228, 228, 228, 0.25)',
                    borderRadius: 14,
                    padding: 20
                }}>
                    <div>
                        <div style={{fontSize: 28, fontWeight: "bold"}}>Community Guidelines</div>
                        <div>You can review our community guidelines on how to post feedbacks here</div>
                    </div>
                    <div style={{marginTop: 50}}>
                        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
                            <div>
                                <Elips/>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
                            <div>
                                <Elips/>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
                            <div>
                                <Elips/>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
                            <div>
                                <Elips/>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: "space-evenly", alignItems: "center"}}>
                            <div>
                                <Elips/>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>
                </div>
            </div>
            {firstEntrance && <PopUp
                onClick={handleCloseFirstEntrancePopUp}
                header={'Welcome to Loop!'}
                text={'Your group administrator has verified your account! Enjoy our platform!'}
            />}
        </div>
    )
};