import Footer from "../Footer";

import "../Assento/style.css"


function Assento() {
    const lugares = [<div class="seat"><span>01</span></div>,
    <div class="seat"><span>02</span></div>,
    <div class="seat"><span>03</span></div>,
    <div class="seat"><span>04</span></div>,
    <div class="seat"><span>05</span></div>,
    <div class="seat"><span>06</span></div>,
    <div class="seat"><span>07</span></div>,
    <div class="seat"><span>08</span></div>,
    <div class="seat"><span>09</span></div>,
    <div class="seat"><span>10</span></div>,
    <div class="seat"><span>11</span></div>,
    <div class="seat"><span>12</span></div>,
    <div class="seat"><span>13</span></div>,
    <div class="seat"><span>14</span></div>,
    <div class="seat"><span>15</span></div>,
    <div class="seat"><span>16</span></div>,
    <div class="seat"><span>17</span></div>,
    <div class="seat"><span>18</span></div>,
    <div class="seat"><span>19</span></div>,
    <div class="seat"><span>20</span></div>,
    <div class="seat"><span>21</span></div>,
    <div class="seat"><span>22</span></div>,
    <div class="seat"><span>23</span></div>,
    <div class="seat"><span>24</span></div>,
    <div class="seat"><span>25</span></div>,
    <div class="seat"><span>26</span></div>,
    <div class="seat"><span>27</span></div>,
    <div class="seat"><span>28</span></div>,
    <div class="seat"><span>29</span></div>,
    <div class="seat"><span>30</span></div>,
    <div class="seat"><span>31</span></div>,
    <div class="seat"><span>32</span></div>,
    <div class="seat"><span>33</span></div>,
    <div class="seat"><span>34</span></div>,
    <div class="seat"><span>35</span></div>,
    <div class="seat"><span>36</span></div>,
    <div class="seat"><span>37</span></div>,
    <div class="seat"><span>38</span></div>,
    <div class="seat"><span>39</span></div>,
    <div class="seat"><span>40</span></div>,
    <div class="seat"><span>41</span></div>,
    <div class="seat"><span>42</span></div>,
    <div class="seat"><span>43</span></div>,
    <div class="seat"><span>44</span></div>,
    <div class="seat"><span>45</span></div>,
    <div class="seat"><span>46</span></div>,
    <div class="seat"><span>47</span></div>,
    <div class="seat"><span>48</span></div>,
    <div class="seat"><span>49</span></div>,
    <div class="seat"><span>50</span></div>,]
    return (
        <>
            <h2 class="Assento titulo">Selecione o(s) assento(s)</h2>
            <div className="Assento assentos">
                {lugares.map((lugar) => lugar)}
            </div>
            <div className="Assento opcoes">
                <span>
                    <div class="seat"></div>
                    <p>Selecionado</p>
                </span>
                <span>
                    <div class="seat"></div>
                    <p>Disponível</p>
                </span>
                <span>
                    <div class="seat"></div>
                    <p>Indisponível</p>
                </span>
            </div>
            <div className="Assento nome-user info-user">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..."></input>
            </div>
            <div className="Assento cpf-user info-user" >
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..."></input>
            </div>
            <button className="Assento button">Reservar assento(o)s</button>
            <Footer />
        </>
    )
}

export default Assento;