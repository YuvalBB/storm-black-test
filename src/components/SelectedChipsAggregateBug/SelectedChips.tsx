import React, {useEffect} from 'react';
import {Chip} from '@material-ui/core';
import map from 'lodash.map';
import findIndex from 'lodash.findindex';
// @ts-ignore
import sumBy from 'lodash.sumby';
// @ts-ignore
import uuid from 'uuid';
// @ts-ignore
let selectedChipsArr: [{ id: string, width: number }] = [];

export default function SelectedChips(props: any) {
    let shouldAggregate = false;
    // @ts-ignore
    const [renderChipsArr, setRenderChipsArr] = React.useState([]);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
    }, [props.selected]);

    useEffect(() => {
    }, [props.containerWidth]);

    function containerRefCallback(container: any) {
        if (container) {
            shouldAggregate = sumBy(selectedChipsArr, 'width') > container.offsetWidth;
            if (shouldAggregate) {
                let widthSum = 0;
                try {
                    setRenderChipsArr([]);
                } catch (e) {
                    console.error(e);
                }
                selectedChipsArr.some(chip => {
                    widthSum += chip.width;

                    if (widthSum <= container.offsetWidth) {
                        // @ts-ignore
                        renderChipsArr.push(chip);
                        setRenderChipsArr(renderChipsArr);
                    } else {
                        // @ts-ignore
                        renderChipsArr.push({id: uuid.v4(), width: 0});
                        setRenderChipsArr(renderChipsArr);
                        forceUpdate();
                        return true;
                    }
                });
            }
        }
        // @ts-ignore
        selectedChipsArr = [];
    }

    function chipRefCallback(chip: any) {
        if (chip) {
            if (findIndex(selectedChipsArr, item => item.id === chip.id) === -1) {
                selectedChipsArr.push({id: chip.id, width: chip.offsetWidth});
            }
        }
    }

    function checkIfInArray(item: { key: string, name: string }) {
        // @ts-ignore
        return renderChipsArr.some(renderItem => renderItem.id === item.key.toString());
    }

    function getAggregateText() {
        return (props.selected.length - renderChipsArr.length + 1) + ' More...';
    }

    function getChipJSX(item: { key: string; name: string }) {
        return (<Chip ref={chipRefCallback} key={item.key} id={item.key} label={item.name}
                      clickable={true} onDelete={() => props.onDelete(item.key)}/>);
    }

    return (
        <div className="selected-chips-container" ref={containerRefCallback}>
            {
                map(props.selected, (item: { key: string, name: string }, index: number) => {
                    if (renderChipsArr.length > 0) {
                        return checkIfInArray(item) ?
                            getChipJSX(item) :
                            (index < renderChipsArr.length ? <Chip key={uuid.v4()} label={getAggregateText()}
                                                                   clickable={false}/> : null);
                    } else {
                        return getChipJSX(item);
                    }
                })}
        </div>);
}
