import React from 'react';
import './App.css';
import useInputState from './useInputState';

export default function Form({saveClient}) {

    const {value: nameValue, reset: nameReset, onChange: nameChange} = useInputState();
    const {value: logoValue, reset: logoReset, onChange: logoChange} = useInputState();
    const {value: accueilValue, reset: accueilReset, onChange: accueilChange} = useInputState();
    const {value: accueilLabelValue, reset: accueilLabelReset, onChange: accueilLabelChange} = useInputState();
    const {value: vv3LabelValue, reset: vv3LabelReset, onChange: vv3LabelChange} = useInputState();
    const {value: vv3Value, reset: vv3Reset, onChange: vv3Change} = useInputState();
    const {value: vgLabelValue, reset: vgLabelReset, onChange: vgLabelChange} = useInputState();
    const {value: vgValue, reset: vgReset, onChange: vgChange} = useInputState();
    const {value: v360LabelValue, reset: v360LabelReset, onChange: v360LabelChange} = useInputState();
    const {value: v360Value, reset: v360Reset, onChange: v360Change} = useInputState();


    return (
        <div id="formulair">
            <h2>Ajouter un nouveau Client</h2>
            
            <form id="ajouter" onSubmit={event => {
                event.preventDefault();
                saveClient({
                    name: nameValue, 
                    logo: logoValue, 
                    accueil: accueilValue, 
                    accueil_label: accueilLabelValue, 
                    vv3: vv3Value,
                    vv3_label:vv3LabelValue, 
                    vg: vgValue, 
                    vg_label: vgLabelValue,
                    v360: v360Value,
                    v360_label: v360LabelValue
                });
                nameReset('');
                logoReset('');
                accueilReset('');
                accueilLabelReset('');
                vv3Reset('');
                vv3LabelReset('');
                vgReset('');
                vgLabelReset('');
                v360Reset('');
                v360LabelReset('');
            }}>
                <label>
                    Nom Client:
                    <input name="name" type="text" onChange={nameChange} 
                        value={nameValue}  
                    />
                </label>
                <label>
                    Logo:
                    <input name="logo" type="text" onChange={logoChange}  
                        value={logoValue} 
                    />
                </label>
                <div>
                    <label>
                        Nom iframe 1:
                        <input name="accueilLabel" type="text" onChange={accueilLabelChange}  
                            value={accueilLabelValue} 
                        />
                    </label>
                    <label>
                        iframe 1:
                        <input name="accueil" type="text" onChange={accueilChange}  
                            value={accueilValue} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nom iframe 2:
                        <input name="vv3Label" type="text" onChange={vv3LabelChange} 
                            value={vv3LabelValue} 
                        />
                    </label>
                    <label>
                        iframe 2:
                        <input name="vv3" type="text" onChange={vv3Change} 
                            value={vv3Value} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nom iframe 3:
                        <input name="vgLabel" type="text" onChange={vgLabelChange} 
                            value={vgLabelValue} 
                        />
                    </label>
                    <label>
                        iframe 3:
                        <input name="vg" type="text" onChange={vgChange} 
                            value={vgValue} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Nom vidéo youtube:
                        <input name="v360Label" type="text" onChange={v360LabelChange} 
                            value={v360LabelValue} 
                        />
                    </label>
                    <label>
                        vidéo youtube:
                        <input name="v360" type="text" onChange={v360Change} 
                            value={v360Value} 
                        />
                    </label>
                </div>

                <label>
                    <input type="submit" value="Ajouter"/>
                </label>
            </form>

        </div>
    )
} 
