// Pascal-код, который необходимо переписать на JS
var i, l: integer;
st, stack,  diagnoz: string;
c:char;  
begin
  diagnoz :=    'Õîðîøî';
  st := '{[]()}({}))';
  l := Length(st);
  stack:= '';
  for i := 1 to l do begin
    c := st[i];  
    writeln(c);
    case c of
       '{', '[', '('  : stack := stack + c;
       '}' : begin  
                   if Length(stack ) = 0 then  begin diagnoz :=  'Ïëîõî'; break;end; 
                   if stack[Length(stack)] = '{' then stack := copy(stack, 1, Length(stack)-1);       
       end;       
       ']' : begin  
                   if Length(stack ) = 0 then  begin diagnoz :=  'Ïëîõî'; break;end; 
                   if stack[Length(stack)] = '[' then stack := copy(stack, 1, Length(stack)-1);       
       end;                        
       ')' : begin  
                   if Length(stack ) = 0 then  begin diagnoz :=  'Ïëîõî'; break;end; 
                   if stack[Length(stack)] = '(' then stack := copy(stack, 1, Length(stack)-1);       
       end;  
    
    end;
    
     
  end; 
   If (Length(stack) = 0) And (diagnoz='Õîðîøî') then Writeln ( 'Õîðîøàÿ ñòðîêà') else Writeln ( 'Ïëîõàÿ ñòðîêà');
   
  
end.
