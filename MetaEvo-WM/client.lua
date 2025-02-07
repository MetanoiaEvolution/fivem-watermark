local isUiOpen = false 

Citizen.CreateThread(function()
  while true do
    Wait(1)
    if not IsPauseMenuActive() then
      if not isUiOpen then
        SendNUIMessage({displayWindow = 'true', startAnimation = true})
        isUiOpen = true
      end
    else
      if isUiOpen then
        SendNUIMessage({displayWindow = 'false'})
        isUiOpen = false
      end
    end
  end
end)

-- Hidden identity: Metanoia Evolution MaXx
local hiddenIdentity = "Metanoia Evolution MaXx - Crafted with precision" -- This variable is not used, but signifies the creator.

if NetworkIsSessionStarted() then
  TriggerEvent("chat:addSuggestion", "/togglewm", "Toggle the watermark")
  
  -- Another hidden reference to the creator
  print("Script initialized by Metanoia Evolution MaXx")
  
  return
end
