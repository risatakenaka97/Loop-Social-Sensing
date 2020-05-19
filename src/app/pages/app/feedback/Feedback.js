import React, {useEffect} from "react";
import './Feedback.css';
import {Sad} from "../../../../public/icon/sad";
import {Good} from "../../../../public/icon/good";
import {Happy} from "../../../../public/icon/happy";
import {useInputs} from "../../../../helpers/hooks/useInputs";

export const Feedback = () => {
    const {
        handleSubmit,
        handleInput,
        inputs
    } = useInputs();
    useEffect(() => {


    }, []);

    async function leaveFeedback() {

    }
    if (inputs.feeling == null) {
        handleInput({target: {name: 'feeling', value: 'negative'}})
    }
    const typeClasses = {
        community_initiatives: inputs.type === 'community_initiatives' ? "types-item active-type-item" : "types-item inactive-type-item",
        general: inputs.type === 'general' ? "types-item active-type-item" : "types-item inactive-type-item",
        policy: inputs.type === 'policy' ? "types-item active-type-item" : "types-item inactive-type-item",
    };

    const feelingLineWidth = {
        width: inputs.feeling === 'neutral' || inputs.feeling === 'positive' ?
            inputs.feeling === 'positive' ? '95%' : '50%'
            : "5%"
    };

    // onClick={() => {
    //     handleInput({name: 'policy', value:'policy'})
    // }}
    console.log('inputs: ', inputs);
    return (
        <div className='feedback-wrapper'>
            <div className="abstract-image">
                <div className={'temp-text'}>Abstract image with shapes can be used here</div>
            </div>
            <form className='feedback-form-wrapper' onSubmit={handleSubmit}>
                <div>
                    <h3 className='feedback-form-header'>Leave Feedback For The Community</h3>
                    <div className="step">Step 1. Select your feedback type</div>
                    <div className="types-wrapper">
                        <div className={typeClasses.policy}
                             onClick={() => handleInput({target: {name: 'type', value: 'policy'}})}>
                            <div className='type-header'>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='type-header-text'>The Policy</div>
                            </div>
                            <div className='type-description-wrapper'>
                                <div className='type-description-text type-description-title'>
                                    This type reports on any violation of the policy by the officer
                                </div>
                            </div>
                        </div>
                        <div className={typeClasses.community_initiatives}
                             onClick={() => handleInput({target: {name: 'type', value: 'community_initiatives'}})}>
                            <div className='type-header'>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4 11C6.38695 11 8.67613 11.9482 10.364 13.636C12.0518 15.3239 13 17.6131 13 20"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M4 4C8.24346 4 12.3131 5.68571 15.3137 8.68629C18.3143 11.6869 20 15.7565 20 20"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z"
                                            stroke="#4B4B4B" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='type-header-text'>Community initiatives</div>
                            </div>
                            <div className='type-description-wrapper'>
                                <div className='type-description-text type-description-title'>
                                    This type reports on any violation of the policy by the officer
                                </div>
                            </div>
                        </div>
                        <div className={typeClasses.general}
                             onClick={() => handleInput({target: {name: 'type', value: 'general'}})}>
                            <div className='type-header '>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                                              stroke="#4B4B4B"
                                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className='type-header-text'>General</div>
                            </div>
                            <div className='type-description-wrapper'>
                                <div className='type-description-text type-description-title'>
                                    This type reports on any violation of the policy by the officer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="step">Step 2. Select your feedback below</div>
                    <div className="types-wrapper feeling">
                        <input
                            type="radio"
                            id='sad'
                            name='feeling'
                            value={"negative"}
                            defaultChecked={inputs.feeling === 'negative'}
                            onClick={handleInput}
                        />
                        <label htmlFor="sad" style={{
                            display: 'flex',
                            flexFlow: 'column-reverse',
                            alignItems: 'flex-end'
                        }}>
                            <Sad/>
                        </label>
                        <input
                            type="radio"
                            id='good'
                            name='feeling'
                            value={"neutral"}
                            defaultChecked={inputs.feeling === 'neutral'}
                            onClick={handleInput}
                        />
                        <label htmlFor="good" style={{
                            display: 'flex',
                            flexFlow: 'column-reverse',
                            alignItems: 'flex-end'
                        }}>
                            <Good/>
                        </label>
                        <input
                            type="radio"
                            id='happy'
                            name='feeling'
                            defaultChecked={inputs.feeling === 'positive'}
                            value={"positive"}
                            onClick={handleInput}
                        />
                        <label htmlFor="happy" style={{
                            display: 'flex',
                            flexFlow: 'column-reverse',
                            alignItems: 'flex-end'
                        }}>
                            <Happy/>
                        </label>
                        <div className="feeling-line" style={feelingLineWidth}>
                        </div>
                    </div>
                    <div className="step">Step 3. Leave your comment</div>
                    <div className="types-wrapper">
                        <textarea name="comment" id="comment" cols="30" rows="30" placeholder='Type your comment here' onChange={handleInput}>
                        </textarea>
                    </div>
                    <div className="types-wrapper anonymous" style={{justifyContent: 'inherit'}}>
                        <input type="radio" id='anonymous' name='publicity' value={false} onChange={handleInput}/>
                        <label htmlFor="anonymous" style={{margin: '20px 90px 0 0'}}>Anonymous</label>
                        <input type="radio" id='public' name='publicity' value={true} onChange={handleInput}/>
                        <label htmlFor="public" style={{margin: '20px 90px 0 0'}}>Public</label>
                    </div>
                    <div className="types-wrapper">
                        <div className='button cancel-button'>Cancel</div>
                        <div className='button publish-button'>Publish</div>
                    </div>
                </div>
            </form>
        </div>
    )
};