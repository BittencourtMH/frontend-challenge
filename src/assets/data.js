const now = new Date();

const data = {
  name: 'Justine Robinson',
  company: 'Acme inc',
  active: true,
  phones: [
    {
      number: '45995555555',
      description: 'Celular'
    }
  ],
  emails: [
    {
      address: 'justine@email.com',
      description: 'Trabalho'
    }
  ],
  whatsapp: '45995555555',
  facebook: '',
  instagram: 'justinerobinson',
  twitter: '',
  linkedin: '',
  places: [
    {
      address: 'Avenida Brasil, 4019',
      latitude: '',
      longitude: '',
      description: 'Trabalho'
    }
  ],
  opportunities: {
    won: {
      amount: 4,
      currency: 'R$',
      value: 20000
    },
    lost: {
      amount: 1,
      currency: 'R$',
      value: 4300
    },
    open: {
      amount: 2,
      currency: '',
      value: 0
    },
    discarded: {
      amount: 0,
      currency: '',
      value: 0
    }
  },
  credit: {
    given: {
      currency: 'R$',
      value: 12000.20
    },
    available: {
      currency: 'R$',
      value: 3105
    }
  },
  securities: {
    overdue: {
      amount: 1,
      currency: 'R$',
      value: 3105
    },
    due: {
      amount: 2,
      currency: 'R$',
      value: 3105
    },
    paid: {
      amount: 2,
      currency: 'R$',
      value: 3105
    }
  },
  activities: {
    delayed: [
      {
        description: 'Ligação de agendamento da reunião',
        person: 'Erica Collins',
        type: 1,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 4, 13).toISOString()
      }
    ],
    doing: [],
    toDo: [
      {
        description: 'Reunião orçamento',
        person: 'Abigail Fisher',
        type: 2,
        daysFromToday: 0,
        time: '15:00'
      },
      {
        description: 'Email documentação',
        person: 'Jeffery King',
        type: 3,
        daysFromToday: 1,
        time: '09:45'
      },
      {
        description: 'Almoço corporativo',
        person: 'Lawrence Kelly',
        type: 4,
        daysFromToday: 1,
        time: '15:00'
      }
    ],
    done: [
      {
        description: 'Apresentação feira agrícola',
        person: 'Caroline Diaz',
        type: 4,
        date: '2018-09-17T08:00'
      },
      {
        description: 'Email orçamento',
        person: 'Arthur Clark',
        type: 3,
        date: '2018-09-18T13:00'
      },
      {
        description: 'Email contrato',
        person: 'Frieda Howard',
        type: 3,
        date: '2018-09-19T10:00'
      },
      {
        description: 'Ligação contrato',
        person: 'Dylan Watsor',
        type: 1,
        date: '2018-09-19T13:00'
      }
    ]
  }
}

console.log(data);

export default data;
