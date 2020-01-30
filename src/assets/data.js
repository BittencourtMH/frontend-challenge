const now = new Date();

const data = {
  name: 'Justine Robinson',
  company: 'Acme inc',
  active: true,
  photo: '',
  phones: [
    {
      id: 1,
      number: '45995555555',
      description: 'Celular'
    }
  ],
  emails: [
    {
      id: 1,
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
      id: 1,
      address: 'Avenida Brasil, 4019',
      latitude: '',
      longitude: '',
      description: 'Trabalho'
    }
  ],
  opportunities: {
    won: {
      amount: 4,
      currency: 'BRL',
      value: 20000
    },
    lost: {
      amount: 1,
      currency: 'BRL',
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
  credits: {
    given: {
      currency: 'BRL',
      value: 12000.20
    },
    available: {
      currency: 'BRL',
      value: 3105
    }
  },
  securities: {
    overdue: {
      amount: 1,
      currency: 'BRL',
      value: 3105
    },
    due: {
      amount: 2,
      currency: 'BRL',
      value: 3105
    },
    paid: {
      amount: 2,
      currency: 'BRL',
      value: 3105
    }
  },
  activities: {
    delayed: [
      {
        id: 5,
        description: 'Ligação de agendamento da reunião',
        person: 'Erica Collins',
        type: 1,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 4, 13).toISOString()
      }
    ],
    doing: [],
    toDo: [
      {
        id: 6,
        description: 'Reunião orçamento',
        person: 'Abigail Fisher',
        type: 2,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15).toISOString()
      },
      {
        id: 7,
        description: 'Email documentação',
        person: 'Jeffery King',
        type: 3,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 45).toISOString()
      },
      {
        id: 8,
        description: 'Almoço corporativo',
        person: 'Lawrence Kelly',
        type: 4,
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 15).toISOString()
      }
    ],
    done: [
      {
        id: 1,
        description: 'Apresentação feira agrícola',
        person: 'Caroline Diaz',
        type: 4,
        date: new Date(2018, 8, 17, 8).toISOString()
      },
      {
        id: 2,
        description: 'Email orçamento',
        person: 'Arthur Clark',
        type: 3,
        date: new Date(2018, 8, 18, 13).toISOString()
      },
      {
        id: 3,
        description: 'Email contrato',
        person: 'Frieda Howard',
        type: 3,
        date: new Date(2018, 8, 19, 10).toISOString()
      },
      {
        id: 4,
        description: 'Ligação contrato',
        person: 'Dylan Watsor',
        type: 1,
        date: new Date(2018, 8, 19, 13).toISOString()
      }
    ]
  }
}

export default data;
