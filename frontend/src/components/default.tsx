import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useState } from 'react';
import TriggerDetails from './TriggerDetails';
import Search from './search';
import axios from 'axios';
import { BASE_URL, initialNodes } from '@/config/utils';
import AvailableTriggerAction from './availableTriggerAction';
import { useAtom } from 'jotai';
import { availableActionsAtom, availableTriggersAtom, selectedActionAtom, selectedTriggerAtom } from '@/store/atom';
import ActionDetails from './actionDetails';


const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function Default() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [currentlyClicked, setCurrentlyClicked] = useState("");
  const [isOpenTrigger, setIsOpenTrigger] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [availableActions, setAvailableActions] = useAtom(availableActionsAtom);
  const [selectedTrigger, setSelectedTrigger] = useAtom(selectedTriggerAtom);
  const [selectedAction, setSelectedAction] = useAtom(selectedActionAtom);
  const [availableTriggers, setAvailableTriggers] = useAtom(availableTriggersAtom);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  useEffect(() => {
    const main = async () => {
      try {
        const triggers = await axios.get(`${BASE_URL}/api/workflow/getTriggers`);
        const actions = await axios.get(`${BASE_URL}/api/workflow/getActions`);
        setAvailableActions(actions.data.actions);
        setAvailableTriggers(triggers.data.triggers);
      } catch (err) {
        alert("error occured");
      }
    }
    main();
    //TODO: add logic to fetch available triggers and actions 
  }, []);

  function onNodeClick(event: any, node: any) {
    setCurrentlyClicked(node.id);
    if (node.id == "n1") {
      setIsOpenAction(false);
      setIsOpenTrigger(true);
    } else {
      let number = parseInt(node.id[1]);
      initialNodes.push(
        {
          id: 'n' + (number += 1).toString(),
          position: { x: 0, y: node.position.y + 100 },
          data: {
            label: <div className='flex justify-center items-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          }
        }
      );
      setNodes(initialNodes);
      setIsOpenTrigger(false);
      setIsOpenAction(true);
    }
  }


  return (
    <div className='flex h-full w-full bg-white' >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onConnect={onConnect}
        onPaneClick={() => {
          setIsOpenTrigger(false);
          setIsOpenAction(false);
        }}
        fitView
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>



      {isOpenTrigger &&
        <div className="w-xl">
          <div className="mr-6  flex justify-end">
            <button
              onClick={() => {
                setIsOpenTrigger(false);
              }}
              className='cursor-pointer p-2 '>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <TriggerDetails />
          <div className="m-3">
            {/*TODO: add logic to search through triggers or actions*/}
            <Search onChange={(e: any) => {
              console.log(e.target.value);
            }} />
            <div className="flex flex-col gap-y-3 mt-8">
              {availableTriggers?.map((x: any) => {
                return <AvailableTriggerAction
                  key={x.id}
                  imageUrl={x.imageUrl}
                  title={x.name}
                  description={x.description}
                  onClick={() => {
                    setSelectedTrigger(x.name)
                    setNodes((prev: any) => {
                      const newArr = prev.map((x: any) => {
                        if (x.id == "n1") {
                          return {
                            ...x,
                            data: {
                              label: <div>
                                {selectedTrigger}
                              </div>
                            }
                          }
                        } else {
                          return { ...x };
                        }
                      });
                      return newArr;
                    });
                  }}
                />
              })}
            </div>
          </div>
        </div>
      }

      {isOpenAction &&
        <div className="w-xl">
          <div className="mr-6  flex justify-end">
            <button
              onClick={() => {
                setIsOpenAction(false);
              }}
              className='cursor-pointer p-2 '>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ActionDetails />
          <div className="m-3">
            {/*TODO: add logic to search through triggers or actions*/}
            <Search onChange={(e: any) => {
              console.log(e.target.value);
            }} />
            <div className="flex flex-col gap-y-3 mt-8">
              {availableActions?.map((x: any) => {
                return <AvailableTriggerAction
                  key={x.id}
                  imageUrl={x.imageUrl}
                  title={x.name}
                  description={x.description}
                  onClick={() => {
                    setSelectedAction(x.name);
                    setNodes((prev: any) => {
                      const newArr = prev.map((x: any) => {
                        if (prev.id == currentlyClicked) {
                          return {
                            ...x,
                            data: {
                              label: <div>
                                {selectedAction}
                              </div>
                            }
                          }
                        } else {
                          return { ...x }
                        }
                      });
                      return newArr;
                    });
                  }}
                />
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}
